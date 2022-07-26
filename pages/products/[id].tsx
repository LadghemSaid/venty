import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import Head from "next/head";

import products from "products";
import Testimonials from "@/components/Testimonials";
import Availbility from "@/components/Availbility";
import Quantity from "@/components/Quantity";
import AddToCartButton from "@/components/AddToCartButton";
import Price from "@/components/Price";
import ProductImage from "@/components/ProductImage";
import i18next from "i18next";
import { SHOW_ARTICLE, SHOW_TESTIMONIALS } from "contants";
import FakeCounter from "@/components/FakeCounter";
import Rating from "@/components/Rating";
import Article from "@/components/Article";
import { redirectToCheckout } from "@/lib/get-stripe";
import { CartDetailProduct, ProductType, varianteType } from "types";
import Variantes from "@/components/Variantes";

const Product = (props: ProductType) => {
  const router = useRouter();
  const { cartDetails, cartCount, addItem } = useShoppingCart();
  const [qty, setQty] = useState<number>(1);
  const [varianteSelected, setVarianteSelected] = useState<varianteType>(
    props.variantes[0]
  );
  const [adding, setAdding] = useState<boolean>(false);

  const toastId = useRef<any>();
  const firstRun = useRef<boolean>(true);

  const handleOnAddToCart = () => {
    setAdding(true);
    toastId.current = toast.loading(
      `${i18next.t("add")} ${qty} ${i18next.t("product")}${
        qty > 1 ? "s" : ""
      }...`
    );
    addItem(
      { ...props, variante: varianteSelected } as unknown as CartDetailProduct,
      qty
    );
    redirectToCheckout(cartDetails);
  };

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    setAdding(false);
    toast.success(
      `${qty} ${props.name} ${i18next.t("cart.added").toLowerCase()}`,
      {
        id: toastId.current,
      }
    );
    setQty(1);
  }, [cartCount]);
  return router.isFallback ? (
    <>
      <Head>
        <title>
          <>{i18next.t("generic.loading")} ...</>
        </title>
      </Head>
      <p className="text-center text-lg py-12">
        <>{i18next.t("generic.loading")} ...</>
      </p>
    </>
  ) : (
    <>
      <Head>
        <title>
          <>
            {props.name} | {i18next.t("generic.title-shop")}
          </>
        </title>
      </Head>
      <div className="container lg:max-w-screen-lg mx-auto md:py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}
          <ProductImage variantes={props.variantes} />

          {/* Product's details */}
          <div className="flex-1 w-full md:max-w-md border border-opacity-50 rounded-md shadow-lg p-6">
            {/* Availbility */}
            <Availbility name={props.name} />
            <Rating rate={props?.rating?.rate} count={props?.rating?.count} />

            {/* Price */}
            <Price price={props.price} fakePrice={props.fakePrice} />

            <div className="mt-4 border-t pt-4">
              <div className="flex space-y-4 flex-col">
                {/* Quantity */}
                <Quantity setQty={setQty} qty={qty} />

                {/* Variante selector */}
                <Variantes
                  setVarianteSelected={setVarianteSelected}
                  varianteSelected={varianteSelected}
                  product={props}
                />
              </div>

              {/* Add to cart button */}
              <AddToCartButton
                handleOnAddToCart={handleOnAddToCart}
                qty={qty}
                adding={adding}
              />
            </div>
            <div className="flex flex-col justify-center mt-2">
              <div className="title flex justify-center items-center">
                <i className="bg-black w-12 md:w-full border-t"></i>
                <span className="w-full mx-2 text-center">
                  {i18next.t("cart.payment-secure").toString()}
                </span>
                <i className="bg-black w-12 md:w-full border-t"></i>
              </div>
              <img src="/cards.png" alt="Card accepted" />
            </div>
          </div>
        </div>
        <FakeCounter product={props} />
        {SHOW_TESTIMONIALS && <Testimonials />}
        {SHOW_ARTICLE && <Article name={props.name} />}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    // Existing posts are rendered to HTML at build time
    paths: Object.keys(products)?.map((id) => ({
      params: { id },
    })),
    // Enable statically generating additional pages
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const props = products?.find((product) => product.id === params.id) ?? {};

    return {
      props,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default Product;

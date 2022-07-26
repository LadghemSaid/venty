import React from "react";

import { useState, useEffect, useRef, useContext } from "react";
import { toast } from "react-hot-toast";
import { CartContext, useShoppingCart } from "@/hooks/use-shopping-cart";

import Testimonials from "@/components/Testimonials";
import Availbility from "@/components/Availbility";
import Quantity from "@/components/Quantity";
import AddToCartButton from "@/components/AddToCartButton";
import Price from "@/components/Price";
import ProductImage from "@/components/ProductImage";
import { SHOW_ARTICLE, SHOW_TESTIMONIALS } from "contants";
import FakeCounter from "@/components/FakeCounter";
import Rating from "@/components/Rating";
import Article from "@/components/Article";
import { redirectToCheckout } from "@/lib/get-stripe";
import Variantes from "@/components/Variantes";
import { varianteType } from "types";
import products from "products";
import i18next from "i18next";
import Head from "next/head";

export default function ProductPage(props) {
  const { cartDetails, cartCount, addItem, clearCart } = useShoppingCart();
  const [qty, setQty] = useState<number>(1);
  const [varianteSelected, setVarianteSelected] = useState<varianteType>(
    props?.variantes?.[0] || products[0].variantes[0]
  );
  const [adding, setAdding] = useState<boolean>(false);
  const [goToCheckout, setgoToCheckout] = useState<boolean>(false);

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
      {
        id_price: props.id_price,
        price: props.price,
        variante: varianteSelected,
        name: props.name,
      },
      qty
    );
    setgoToCheckout(true);
  };

  useEffect(() => {
    if (goToCheckout) {
      redirectToCheckout(cartDetails, clearCart);
    }
  }, [goToCheckout]);

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

  return (
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
}

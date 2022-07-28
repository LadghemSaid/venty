import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import axios from "axios";
import { formatCurrency, GAevent, GApageview } from "@/lib/utils";
import getStripe, { redirectToCheckout } from "@/lib/get-stripe";
import {
  XCircleIcon,
  XIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/react/outline";
import i18next from "i18next";
import { MULTI_PRODUCT_SHOP, TITLE_SHOP } from "contants";

const Cart = () => {
  const { cartDetails, totalPrice, cartCount, addItem, removeItem, clearCart } =
    useShoppingCart();
  GApageview("cart");

  const [redirecting, setRedirecting] = useState(false);

  return (
    <>
      <Head>
        <title>
          <>
            {i18next.t("cart.my-cart")} | {TITLE_SHOP}
          </>
        </title>
      </Head>
      <div className="container  mx-auto px-6 py-12 xl:max-w-screen-xl">
        {cartCount > 0 ? (
          <>
            <h2 className="text-4xl font-semibold">
              {i18next.t("cart.your-cart").toString()}
            </h2>
            <p className="mt-1 text-xl">
              {cartCount} {i18next.t("products.product").toLowerCase()}
              {cartCount > 1 ? "s" : ""}
              <button
                onClick={clearCart}
                className="opacity-50 hover:opacity-100 text-base capitalize ml-2"
              >
                <>({i18next.t("cart.remove-all")})</>
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-semibold">
              {i18next.t("cart.your-cart-is-empty").toString()}
            </h2>
            <p className="mt-1 text-xl">
              <>
                {i18next.t("cart.we-have-the-product-you-need")}

                <Link href="/">
                  <a
                    onClick={() =>
                      GAevent({
                        action: "click:clickOnHere",
                      })
                    }
                    className="text-red-500 underline ml-2"
                  >
                    {i18next.t("cart.here").toString()}
                  </a>
                </Link>
              </>
            </p>
          </>
        )}

        {cartCount > 0 ? (
          <div style={{ minHeight: "60vh" }} className="flex flex-col  mt-12">
            {Object.entries(cartDetails).map(([key, product]) => (
              <div
                key={key}
                className="flex justify-between space-x-4 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4 
                flex-col md:flex-row"
              >
                {/* Image + Name */}
                <Link
                  href={
                    MULTI_PRODUCT_SHOP ? `/products/${product.id_price}` : `/`
                  }
                >
                  <a
                    onClick={() => {
                      GAevent({
                        action: "click:clickFromCartGoToProduct" + product.name,
                      });
                    }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                      {product?.variante?.images?.[0] && (
                        <Image
                          src={product?.variante?.images?.[0]}
                          alt={product.name}
                          layout="fill"
                          objectFit="contain"
                        />
                      )}
                    </div>
                    <p className="font-semibold text-xl group-hover:underline">
                      {product.name}
                    </p>
                    {/* Remove item */}
                    <button
                      onClick={() => removeItem(product, product.quantity)}
                      className="md:ml-4 hover:text-rose-500"
                    >
                      <XCircleIcon className="w-6 h-6 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity" />
                    </button>
                  </a>
                </Link>

                {/* Price + Actions */}
                <div className="flex items-center  justify-end flex-row">
                  {/* Quantity */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => removeItem(product)}
                      disabled={product?.quantity <= 1}
                      className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                    >
                      <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
                    </button>
                    <p className="font-semibold text-xl">{product.quantity}</p>
                    <button
                      onClick={() => addItem(product)}
                      className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
                    >
                      <PlusSmIcon className="w-6 h-6 flex-shrink-0 " />
                    </button>
                  </div>

                  {/* Price */}
                  <p className="font-semibold text-xl md:ml-16">
                    <XIcon className="w-4 h-4 text-gray-500 inline-block" />
                    {formatCurrency(product.price)}
                  </p>
                </div>
              </div>
            ))}

            <div
              style={{ marginTop: "auto" }}
              className="flex flex-col items-end border-t py-4 mt-8"
            >
              <p className="text-xl">
                <>{i18next.t("cart.total")} :</>
                <span className="font-semibold">
                  {formatCurrency(totalPrice)}
                </span>
              </p>

              <button
                onClick={() => redirectToCheckout(cartDetails, clearCart)}
                disabled={redirecting}
                className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4"
              >
                {redirecting
                  ? i18next.t("cart.redirecting") + "..."
                  : i18next.t("cart.payment").toString()}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;

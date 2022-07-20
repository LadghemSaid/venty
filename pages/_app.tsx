import "tailwindcss/tailwind.css";
import "@/css/global.scss";

import Head from "next/head";
import { CartProvider } from "@/hooks/use-shopping-cart";
import { Header, Footer } from "@/components/index";
import { Toaster } from "react-hot-toast";
import i18next from "i18next";
import FR from "locales/FR.json";
import EN from "locales/EN.json";
i18next.init({
  lng: "fr", // if you're using a language detector, do not define the lng option
  debug: false,
  resources: {
    fr: FR,
    en: EN,
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key={"title"}>
          <>
            {i18next.t("generic.title-line")} |{" "}
            {i18next.t("generic.title-shop")}
          </>
        </title>
        <meta
          key={"meta:1"}
          name="description"
          content={i18next.t("generic.meta-description")}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;

import "tailwindcss/tailwind.css";
import "@/css/global.scss";

import Head from "next/head";

import { CartProvider } from "@/hooks/use-shopping-cart";
import { Header, Footer } from "@/components/index";
import { Toaster } from "react-hot-toast";
import i18next from "i18next";
import FR from "locales/FR.json";
import EN from "locales/EN.json";
import { useEffect, useReducer, useState, createContext } from "react";
import { TimeReducer } from "@/hooks/use-local-timer-reducer";
import products from "products";
import Cookies from "js-cookie";
import { GApageview, initializeRandomCookies } from "@/lib/utils";
import { FakeDataMachine } from "machines/FakeDataMachine";
import { useMachine } from "@xstate/react";
import moment from "moment";
import { ProductListType } from "types";
import Swiper from "swiper";
import { useRouter } from "next/router";

i18next.init({
  lng: "fr", // if you're using a language detector, do not define the lng option
  debug: false,
  resources: {
    fr: FR,
    en: EN,
  },
});
export const ProductStore = createContext<{
  productList: ProductListType;
  setProductList: Function;
  fakeDataIteration: number;
  swiperProductPhoto: Swiper | null;
  setSwiperProductPhoto: Function;
}>({
  productList: [],
  setProductList: null,
  fakeDataIteration: 1,
  swiperProductPhoto: null,
  setSwiperProductPhoto: null,
});

function MyApp({ Component, pageProps }) {
  // const [state, send] = useMachine(FakeDataMachine);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      GApageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const [productList, setProductList] = useState(
    initializeRandomCookies(products)
  );
  const [swiperProductPhoto, setSwiperProductPhoto] = useState(null);
  const [fakeDataIteration, setFakeDataIteration] = useState(1);

  const [timer, dispatchTimer] = useReducer(TimeReducer, 0);
  const item = productList[Math.floor(Math.random() * productList.length)];

  useEffect(() => {
    setInterval(() => {
      dispatchTimer({ type: "Increment" });
    }, 2000);
  }, []);

  if (moment.unix(item?.eventTime).isBefore(moment())) {
    let tmpEvtTime = moment()
      .add(Math.floor(Math.random() * 20) + 10, "hours")
      .add(Math.floor(Math.random() * 60) + 1, "minutes")
      .add(Math.floor(Math.random() * 60) + 1, "seconds")
      .unix();
    Cookies.set("eventTime-" + item.id_price, tmpEvtTime);
    setProductList(
      productList.map((i) => {
        if (i.id_price === item.id_price) {
          i.eventTime = tmpEvtTime;
        }
        return i;
      })
    );
  }
  if (timer > 7 * fakeDataIteration) {
    if (item?.itemsLeft > 2) {
      Cookies.set("itemsLeft-" + item.id_price, item?.itemsLeft - 1);
      setProductList(
        productList.map((i) => {
          if (i.id_price === item.id_price) {
            i.itemsLeft--;
          }
          return i;
        })
      );
      setFakeDataIteration(fakeDataIteration + 1);
    } else {
      //Reinitialise le compteur à 12... pas assez realiste autant laisser a 2 left
      // setProductList(
      //   productList.map((i) => {
      //     if (i.id_price === item.id_price) {
      //       i?.itemsLeft = 12;
      //     }
      //     return i;
      //   })
      // );
      // setFakeDataIteration(1);
    }
    dispatchTimer({ type: "Reset" });
  }

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <ProductStore.Provider
        value={{
          productList,
          setProductList,
          fakeDataIteration,
          swiperProductPhoto,
          setSwiperProductPhoto,
        }}
      >
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ProductStore.Provider>
      <Toaster />
    </>
  );
}

export default MyApp;

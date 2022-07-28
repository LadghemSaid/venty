import i18next from "i18next";
import moment from "moment";
import axios from "axios";
import confetti from "canvas-confetti";
import Cookies from "js-cookie";
import { ProductListType, ProductType } from "types";

export function isWhatPercentOf(numA, numB) {
  return (Math.floor((numA / numB) * 100 * 100) / 100).toFixed(0);
}
export const formatCurrency = (amount = 0, currency = "EUR") =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    minimumIntegerDigits: 2,
  }).format(amount / 100);

export const isClient = typeof window === "object";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export const shootFireworks = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

export function calculateTimeLeft(eventTimeFromCookie) {
  let eventTime: any = eventTimeFromCookie;
  let currentTime: any = Math.floor(Date.now() / 1000).toString();
  let leftTime: any = eventTime - currentTime;
  let duration = moment.duration(leftTime, "seconds");
  let interval = 1000;
  if (duration.asSeconds() <= 0) {
    clearInterval(interval);
    //window.location.reload(true); //#skip the cache and reload the page from the server
  }
  duration = moment.duration(duration.asSeconds() - 1, "seconds");
  return (
    duration.days() +
    " " +
    i18next.t("generic.days") +
    " " +
    duration.hours() +
    " " +
    i18next.t("generic.hours") +
    " " +
    duration.minutes() +
    " " +
    i18next.t("generic.minutes") +
    " " +
    duration.seconds() +
    " " +
    i18next.t("generic.secondes")
  );
}

export function initializeRandomCookies(
  products: ProductListType
): ProductListType {
  if (typeof window !== "undefined") {
    return products.map((product) => {
      let tmpItemsLeft = Cookies.get("itemsLeft-" + product.id_price);
      let tmpEvtTime = Cookies.get("eventTime-" + product.id_price);
      let newDate = moment()
        .add(Math.floor(Math.random() * 20) + 10, "hours")
        .add(Math.floor(Math.random() * 60) + 1, "minutes")
        .add(Math.floor(Math.random() * 60) + 1, "seconds")
        .unix();

      if (!tmpEvtTime) {
        tmpEvtTime = newDate;
        Cookies.set("eventTime-" + product.id_price, tmpEvtTime);
      }
      if (moment.unix(tmpEvtTime).isBefore(moment())) {
        tmpEvtTime = newDate;
        Cookies.set("eventTime-" + product.id_price, tmpEvtTime);
      }
      if (!tmpItemsLeft) {
        tmpItemsLeft = Math.floor(Math.random() * 19) + 2;
        Cookies.set("itemsLeft-" + product.id_price, tmpItemsLeft);
      }

      return { ...product, eventTime: tmpEvtTime, itemsLeft: tmpItemsLeft };
    });
  }
  return products;
}

export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

export async function notify(title, message, priority = 5, url = "") {
  await axios({
    method: "post",
    url:
      process.env.WEBHOOK_MICROSERVICE_URL +
      process.env.WEBHOOK_MICROSERVICE_TOKEN,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      title: title + " " + process.env.NODE_ENV,
      message: message,
      priority: priority,
      extras: {
        ...(url.length > 0 && {
          "android::action": {
            onReceive: {
              intentUrl: url,
            },
          },
          "client::notification": {
            click: {
              url,
            },
          },
        }),
      },
    }),
  });
}

declare global {
  interface Window {
    gtag: Function;
  }
}
// log the pageview with their URL
export const GApageview = (url) => {
  typeof window !== "undefined" &&
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
};

// log specific events happening.
export const GAevent = ({
  action,
  params,
}: {
  action: string;
  params?: string;
}) => {
  typeof window !== "undefined" &&
    window.gtag("event", action, { type: params });
};

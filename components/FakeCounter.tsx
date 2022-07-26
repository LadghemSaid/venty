import { ClockIcon } from "@heroicons/react/outline";
import {
  ExclamationCircleIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/solid";
import i18next from "i18next";
import moment from "moment";
import { useContext, useEffect, useReducer, useState } from "react";
import Cookies from "js-cookie";
import { calculateTimeLeft, initializeRandomCookies } from "@/lib/utils";
import products from "products";
import { ProductStore } from "pages/_app";

export default function FakeCounter({ product }) {
  moment.locale(i18next.language);
  const ProductStoreContext = useContext(ProductStore);
  const item = ProductStoreContext.productList.find(
    ({ id }) => id === product.id_price
  );
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(item?.eventTime));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(item?.eventTime));
    }, 1000);
  });

  return (
    <>
      <p className="block text-lg my-3">
        <>
          <ClockIcon className="w-5 h-5 mr-2 inline text-green-600" />
          {i18next.t("generic.destokage-finish-in")}
          <span className="ml-2 text-lg font-bold text-green-600">
            {timeLeft}
          </span>
        </>
      </p>

      <p className="block text-lg my-3">
        <ExclamationCircleIcon className="w-5 h-5 mr-2 inline" />
        {i18next.t("generic.left-only").toString()}
        <span className="ml-1 font-semibold mr-1">
          {i18next
            .t("generic.items-in-stock", { itemsCount: item?.itemsLeft })
            .toString()}
        </span>
        {i18next.t("products.in-stock").toLowerCase()}
      </p>
      <span className="block text-lg my-3">
        <ReceiptRefundIcon className="w-5 h-5 mr-2 inline" />
        {i18next.t("generic.satisfied-or-refund").toString()}
      </span>
    </>
  );
}

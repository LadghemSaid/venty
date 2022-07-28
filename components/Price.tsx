import { formatCurrency, isWhatPercentOf } from "@/lib/utils";
import i18next from "i18next";

export default ({ price, fakePrice }) => {
  return (
    <div className="mt-2 border-t pt-4">
      <p className="text-gray-500">
        <>{i18next.t("products.price")}:</>
      </p>
      <div className="flex items-center">
        <p className="text-xl font-semibold">{formatCurrency(price)}</p>
        <div className="relative">
          <p
            style={{ textDecoration: "line-through" }}
            className="fake-price ml-2 font-light "
          >
            {fakePrice ? formatCurrency(fakePrice) : formatCurrency(price * 2)}
          </p>
          <i
            style={{
              textDecoration: "none",
              position: "absolute",
              top: "-16px",
              right: "0px",
              fontSize: "12px",
              fontWeight: 100,
              padding: "3px",
            }}
          >
            - {isWhatPercentOf(price, fakePrice ? fakePrice : price * 2)}%
          </i>
        </div>
      </div>
    </div>
  );
};

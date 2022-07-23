import { formatCurrency } from "@/lib/utils";
import i18next from "i18next";

export default ({ price }) => {
  return (
    <div className="mt-2 border-t pt-4">
      <p className="text-gray-500">
        <>{i18next.t("products.price")}:</>
      </p>
      <p className="text-xl font-semibold">{formatCurrency(price)}</p>
    </div>
  );
};

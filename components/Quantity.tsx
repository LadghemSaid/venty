import { GAevent } from "@/lib/utils";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import i18next from "i18next";

export default ({ setQty, qty }) => {
  return (
    <div className="flex-col">
      <p className="text-gray-500">
        <>{i18next.t("products.quantity")}:</>
      </p>
      <div className="mt-1 flex items-center space-x-3">
        <button
          onClick={() => {
            GAevent({
              action: "click",
              params: "decreaseQuantity",
            });
            setQty((prev) => prev - 1);
          }}
          disabled={qty <= 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
        >
          <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
        </button>
        <p className="font-semibold text-xl">{qty}</p>
        <button
          onClick={() => {
            GAevent({
              action: "click",
              params: "increaseQuantity",
            });
            setQty((prev) => prev + 1);
          }}
          className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
        >
          <PlusSmIcon className="w-6 h-6 flex-shrink-0 " />
        </button>
      </div>
    </div>
  );
};

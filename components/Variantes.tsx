import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import i18next from "i18next";
import { ProductStore } from "pages/_app";
import products from "products";
import { useContext } from "react";
import { ProductType, variantesType } from "types";
import { capitalize } from "lib/utils";

export default ({
  product,
  varianteSelected,
  setVarianteSelected,
}: {
  setVarianteSelected: Function;
  varianteSelected: variantesType;
  product: ProductType;
}) => {
  // const ProductStoreContext = useContext(ProductStore);

  return (
    <div className="flex-col">
      <p className="text-gray-500">
        <>{i18next.t("products.variantes")}:</>
      </p>
      <ul className="gap-6 grid grid-cols-2">
        {product.variantes.map((variante) => {
          return (
            <li className="w-full">
              <button className="mt-2  w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                {capitalize(variante.name)}
              </button>
            </li>
          );
        })}
        <li></li>
      </ul>
      {/* <div className="mt-1 flex items-center space-x-3">
        <button
          onClick={() => setQty((prev) => prev - 1)}
          disabled={qty <= 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
        >
          <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
        </button>
        <p className="font-semibold text-xl">{qty}</p>
        <button
          onClick={() => setQty((prev) => prev + 1)}
          className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
        >
          <PlusSmIcon className="w-6 h-6 flex-shrink-0 " />
        </button>
      </div> */}
    </div>
  );
};

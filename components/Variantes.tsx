import i18next from "i18next";
import { ProductStore } from "pages/_app";
import { useContext } from "react";
import { ProductType, varianteType } from "types";
import { capitalize } from "lib/utils";

export default ({
  product,
  varianteSelected,
  setVarianteSelected,
}: {
  setVarianteSelected: Function;
  varianteSelected: varianteType;
  product: ProductType;
}) => {
  function handleSetVariante(variante) {
    ProductStoreContext?.swiperProductPhoto?.slideTo(
      product.variantes.findIndex((it) => it.name === variante.name) || 0
    );
    setVarianteSelected(variante);
  }
  const ProductStoreContext = useContext(ProductStore);

  return (
    <div className="flex-col">
      <p className="text-gray-500">
        <>{i18next.t("products.variantes")}:</>
      </p>
      <ul className="gap-6 grid grid-cols-2">
        {product.variantes &&
          product.variantes.map((variante, index) => {
            return (
              <li key={"variante-" + index} className="w-full">
                <button
                  onClick={() => handleSetVariante(variante)}
                  style={{
                    borderColor:
                      varianteSelected.id_price === variante.id_price &&
                      "black",
                  }}
                  className="mt-2  w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  {capitalize(variante.name)}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

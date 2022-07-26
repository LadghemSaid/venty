import { useEffect, useState } from "react";
import { ProductCard } from "@/components/index";

import products from "products";
import { initializeRandomCookies } from "@/lib/utils";
import moment from "moment";
import i18next from "i18next";
import { TimeReducer } from "@/hooks/use-local-timer-reducer";
import { MULTI_PRODUCT_SHOP } from "contants";
import Product from "./products/[id]";
export default function Home() {
  const [disabled, setDisabled] = useState(false);
  const [producstList, setProductList] = useState(products);
  moment.locale(i18next.language);
  useEffect(() => {
    setProductList(initializeRandomCookies(products));
  }, []);
  return (
    <div className="container xl:max-w-screen-xl min-h-screen mx-auto  px-6">
      {MULTI_PRODUCT_SHOP && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {producstList.map((product) => (
            <ProductCard
              key={product.id_price}
              disabled={disabled}
              onClickAdd={() => setDisabled(true)}
              onAddEnded={() => setDisabled(false)}
              {...product}
            />
          ))}
        </div>
      )}
      {!MULTI_PRODUCT_SHOP && (
        <div>
          <Product
            name={producstList[0].name}
            id_price={producstList[0].id_price}
            rating={producstList[0].rating}
            price={producstList[0].price}
            description={producstList[0].description}
            eventTime={producstList[0]?.eventTime}
            itemsLeft={producstList[0]?.itemsLeft}
            fakePrice={producstList[0].fakePrice}
            currency={producstList[0]?.currency}
            variantes={producstList[0].variantes}
          />
        </div>
      )}
    </div>
  );
}

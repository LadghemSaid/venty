import { useEffect, useState } from "react";
import { ProductCard } from "@/components/index";

import products from "products";
import { initializeRandomCookies } from "@/lib/utils";
import moment from "moment";
import i18next from "i18next";
import { TimeReducer } from "@/hooks/use-local-timer-reducer";
import { SHOW_PRODUCT_LIST_AT_HOMEPAGE } from "contants";
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
      {SHOW_PRODUCT_LIST_AT_HOMEPAGE && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {producstList.map((product) => (
            <ProductCard
              key={product.id}
              disabled={disabled}
              onClickAdd={() => setDisabled(true)}
              onAddEnded={() => setDisabled(false)}
              {...product}
            />
          ))}
        </div>
      )}
      {!SHOW_PRODUCT_LIST_AT_HOMEPAGE && (
        <div>
          <Product
            name={producstList[0].name}
            id={producstList[0].id}
            images={producstList[0].images}
            rating={producstList[0].rating}
            price={producstList[0].price}
            description={producstList[0].description}
            eventTime={producstList[0].eventTime}
            itemsLeft={producstList[0].itemsLeft}
            fakePrice={producstList[0].fakePrice}
            currency={producstList[0].currency}
            variantes={producstList[0].variantes}
          />
        </div>
      )}
    </div>
  );
}

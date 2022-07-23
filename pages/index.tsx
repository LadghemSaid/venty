import { useEffect, useReducer, useState } from "react";
import { ProductCard } from "@/components/index";

import products from "products";
import { initializeRandomCookies } from "@/lib/utils";
import moment from "moment";
import i18next from "i18next";
import { TimeReducer } from "@/hooks/use-local-timer-reducer";
import Cookies from "js-cookie";
export default function Home() {
  const [disabled, setDisabled] = useState(false);
  const [producstList, setProductList] = useState(products);
  moment.locale(i18next.language);

  useEffect(() => {
    setProductList(initializeRandomCookies(products));
  }, []);
  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
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
    </div>
  );
}

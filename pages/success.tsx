import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { fetcher, GAevent, GApageview, shootFireworks } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/outline";
import i18next from "i18next";

const Success = () => {
  const {
    query: { session_id },
  } = useRouter();
  GApageview("SuccessPage");

  const { clearCart, cartCount } = useShoppingCart();

  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      GAevent({
        action: "purchased",
        params: {
          itemsCount: cartCount,
        },
      });
      shootFireworks();
      clearCart();
    }
  }, [data]);

  return (
    <div className="container flex items-center min-h-screen mx-auto px-6 py-12 text-center xl:max-w-screen-xl">
      {error ? (
        <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
          <p className="text-lg">{i18next.t("error.undefined").toString()}</p>
        </div>
      ) : !data ? (
        <div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
          <p className="text-lg animate-pulse">
            <>{i18next.t("generic.loading")}...</>
          </p>
        </div>
      ) : (
        <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
          <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
            <CheckIcon className="w-12 h-12 flex-shrink-0 text-green-600" />
            <span>{i18next.t("generic.thanks-for-your-order").toString()}</span>
          </h2>
          <p className="text-lg mt-3">
            {i18next.t("check-yout-inbox-for-receipt").toString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;

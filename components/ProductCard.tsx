import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Rating } from "@/components/index";
import i18next from "i18next";

const ProductCard = (props) => {
  const { cartCount, addItem } = useShoppingCart();
  const [adding, setAdding] = useState(false);

  const toastId = useRef<any>();
  const firstRun = useRef(true);

  const handleOnAddToCart = (event) => {
    event.preventDefault();

    setAdding(true);
    toastId.current = toast.loading(
      i18next.t("products.adding-one-item").toString()
    );

    if (typeof props.onClickAdd === "function") {
      props.onClickAdd();
    }

    addItem(props);
  };

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (adding) {
      setAdding(false);
      toast.success(`${props.name} ${i18next.t("cart.added").toLowerCase()}`, {
        id: toastId.current,
      });
    }

    if (typeof props.onAddEnded === "function") {
      props.onAddEnded();
    }
  }, [cartCount]);

  return (
    <Link href={`/products/${props.id}`}>
      <a className="border rounded-md p-6 group">
        {/* Product's image */}
        <div className="relative w-full h-64 group-hover:transform group-hover:scale-125 group-hover:ease-in-out group-hover:duration-500">
          <Image
            src={props.images[0]}
            alt={props.name}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Name + Rating */}
        <div className="mt-4 sm:mt-8">
          <p className="font-semibold text-lg capitalize">{props.name}</p>
          <Rating rate={props?.rating?.rate} count={props?.rating?.count} />
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-500">
              {i18next.t("products.price").toString()}
            </p>
            <p className="text-lg font-semibold">
              {formatCurrency(props.price, props.currency)}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOnAddToCart}
            disabled={adding || props.disabled}
            className={`border rounded-lg py-1 px-4 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              adding
                ? "disabled:bg-rose-500 disabled:border-rose-500 disabled:text-white"
                : "disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-200"
            }`}
          >
            {adding
              ? i18next.t("products.adding").toString() + "..."
              : i18next.t("cart.add-to-cart").toString()}
          </button>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;

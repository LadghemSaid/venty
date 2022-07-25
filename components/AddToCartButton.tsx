import i18next from "i18next";

export default function AddToCartButton({ handleOnAddToCart, adding, qty }) {
  return (
    <button
      type="button"
      onClick={handleOnAddToCart}
      disabled={adding}
      className="animate-pulse w-full  mt-2  border rounded py-2 px-6 bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 focus:ring-4 focus:ring-opacity-50 focus:ring-green-500 font-bold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {i18next.t("cart.add-to-cart")} ({qty})
    </button>
  );
}

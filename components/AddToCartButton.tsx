import i18next from "i18next";

export default function AddToCartButton({ handleOnAddToCart, adding, qty }) {
  
  return (
    <button
      type="button"
      onClick={handleOnAddToCart}
      disabled={adding}
      className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {i18next.t("cart.add-to-cart")} ({qty})
    </button>
  );
}

import { toast } from "react-hot-toast";
import { CartContext, useShoppingCart } from "@/hooks/use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useContext } from "react";
import { CartDetails } from "types";

let stripePromise = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};
export const redirectToCheckout = async (
  cartDetails: CartDetails,
  clearCart: Function
) => {
  // Create Stripe checkout
  try {
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      items: Object.entries(cartDetails).map(([_, { id_price, quantity }]) => ({
        price: id_price,
        quantity,
      })),
    });
    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  } catch (error) {
    toast.error("Désolé, une erreur est survenue...");
    clearCart();
  }
};
export default getStripe;

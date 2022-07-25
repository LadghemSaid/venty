import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { CartDetails } from "types";

let stripePromise = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};
export const redirectToCheckout = async (cartDetails: CartDetails) => {
  // Create Stripe checkout
  const {
    data: { id },
  } = await axios.post("/api/checkout_sessions", {
    items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
      price: id,
      quantity,
    })),
  });

  // Redirect to checkout
  const stripe = await getStripe();
  await stripe.redirectToCheckout({ sessionId: id });
};
export default getStripe;

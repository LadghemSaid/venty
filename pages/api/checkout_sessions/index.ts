import { notify } from "@/lib/utils";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, null);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        shipping_address_collection: {
          allowed_countries: ["FR"],
        },
        locale: "fr",
        //@ts-ignore
        shipping_options: [
          {
            shipping_rate_data: {
              display_name: "Livraison standard en france",
              type: "fixed_amount",
              delivery_estimate: {
                maximum: { unit: "day", value: 5 },
                minimum: { unit: "day", value: 3 },
              },
              fixed_amount: {
                amount: 0,
                currency: "eur",
              },
            },
          },
        ],
        payment_method_types: ["card"],
        line_items: req?.body?.items ?? [],
        metadata: {
          items: JSON.stringify(req?.body?.items),
        },
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      });
      //Notif here une perssonne va jusqu'au paiment
      notify("Venty", "Un client potentiel est sur le point de checkout", 2);
      res.status(200).json(session);
    } catch (err) {
      notify(
        "Venty",
        "Un client potentiel n'a pas réussi à acceder au checkout"
      );
      console.log("❌ " + err);
      res.status(500).json({ statusCode: 500, message: err.raw.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

import { generate_order } from "@/lib/order-functions";
import Stripe from "stripe";
import { buffer } from "micro";
import { notify } from "@/lib/utils";
import moment from "moment";
const fs = require("fs");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, null);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    let event;

    try {
      // 1. Retrieve the event by verifying the signature using the raw body and secret
      const rawBody = await buffer(req);
      const signature = req.headers["stripe-signature"];

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
    console.log("✅ Success:", event.id);
    console.log("✅ event:", JSON.stringify(event));

    // 2. Handle event type (add business logic here)
    if (event.type === "checkout.session.completed") {
      console.log(`💰  Payment received!`);
      //Write order to airtable
      const commandeId = await generate_order(event);

      try {
        //Write order to json localy
        let data = JSON.stringify(event);

        let filePath = `./../../../commandes/${moment().format(
          "DD-MM-YYYY/h-mm-ss"
        )}.json`;

        fs.writeFile(filePath, data, (err) => {
          if (err) throw err;
          console.log("Commande Data written to file :" + filePath);
        });
      } catch (error) {
        console.error(
          "Erreur lors de l'ecriture de la commande en local : ",
          error
        );
      }

      //Send notification via gotify
      notify(
        "Venty",
        "Nouvelle commande",
        5,
        `https://airtable.com/${process.env.AIRTABLE_BASE}/${process.env.AIRTABLE_COMMANDE}/${process.env.AIRTABLE_VIEW}/${commandeId}?blocks=hide`
      );

      //Send email to customer
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // 3. Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

import Airtable from "airtable";
import moment from "moment";
import products from "products";
import { formatCurrency } from "./utils";
moment.locale("fr");
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
  endpointUrl: "https://api.airtable.com",
}).base(process.env.AIRTABLE_BASE);

export function generate_order(event): string {
  const {
    data: { object: data },
  } = event;

  const items = JSON.parse(data.metadata.items);
  const realItem = items.map((it) => {
    const itFound = products.find((pr) => pr.id_price === it.price);
    return (
      itFound.name +
      `(${it.quantity}) (${itFound.variantes?.[0]?.name || "Default"})`
    );
  });
  let recordCreated;
  base("Commandes").create(
    [
      {
        fields: {
          customer_email: data.customer_email,
          "customer_details.name": data.customer_details.name,
          "customer_details.email": data.customer_details.email,
          "customer_details.phone": data.customer_details.phone,
          "customer_details.city": data.customer_details.address.city,
          "customer_details.country": data.customer_details.address.country,
          "customer_details.line1": data.customer_details.address.line1,
          "customer_details.line2": data.customer_details.address.line2,
          "customer_details.postal_code":
            data.customer_details.address.postal_code,
          "customer_details.state": data.customer_details.address.state,
          "shipping.name": data.shipping.name,
          "shipping.city": data.shipping.address.city,
          "shipping.country": data.shipping.address.country,
          "shipping.line1": data.shipping.address.line1,
          "shipping.line2": data.shipping.address.line2,
          "shipping.postal_code": data.shipping.address.postal_code,
          "shipping.state": data.shipping.address.state,
          payment_intent: data.payment_intent,
          payment_status: data.payment_status,
          livemode: data.livemode,
          "Paiement Stripe": `https://dashboard.stripe.com${
            process.env.NODE_ENV === "production" ? "" : "/test"
          }/payments/${data.payment_intent}`,
          Panier: realItem,
          Status: "à traiter",
          "Crée le": moment(event.created).format("LLL"),
          "Total payé": formatCurrency(data.amount_total),
          amount_subtotal: formatCurrency(data.amount_subtotal),
        },
      },
    ],
    { typecast: true },
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        recordCreated = record.getId();
        // console.log(record.getId());
      });
    }
  );
  return recordCreated;
}

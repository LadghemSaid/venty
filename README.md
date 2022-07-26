E-commerce store built with Next.js and Stripe checkout by [AlterClass.io](https://alterclass.io).

- Learn to build this application step-by-step by following the tutorial on [AlterClass](https://alterclass.io/tutorials/create-an-ecommerce-website-with-nextjs-and-stripe).

- Preview the app live [here](https://myplantshop.vercel.app/).

- Deploy the same app using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/AlterClassIO/ecommerce-nextjs-stripe-checkout&project-name=eCommerce+Store+by+AlterClass&repository-name=eCommerce+Store+by+AlterClass)

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/AlterClassIO/ecommerce-nextjs-stripe-checkout
cd ecommerce-nextjs-stripe-checkout
npm install
```

### 2. Configure your local environment

Rename the `.env.local.example` file in this directory to `.env.local` (which will
be ignored by Git):

```
cp .env.local.example .env.local
```

Add your own values for all the environment variables.

### 3. Start the application

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
```

## License

[MIT](https://github.com/AlterClassIO/ecommerce-nextjs-stripe-checkout/blob/master/LICENSE)

## Launch Stripe local server to test webhook workflow and checkout processs

./stripe.exe login
./stripe.exe listen --forward-to localhost:3000/api/webhook

Event when payment is completed : {"id":"evt_1LPoQNGYxr8yvqo4cCy9eVnT","object":"event","api_version":"2020-08-27","created":1658844470,"data":{"object":{"id":"cs_test_a1MY7ujYtKFs0KPKHVMehhf662ahMyKzFBmwDiHFUCq0IOTPMOBuctmscN","object":"checkout.session","after_expiration":null,"allow_promotion_codes":null,"amount_subtotal":7998,"amount_total":7998,"automatic_tax":{"enabled":false,"status":null},"billing_address_collection":null,"cancel_url":"http://localhost:3001/cart","client_reference_id":null,"consent":null,"consent_collection":null,"currency":"eur","customer":"cus_M84ZtbihUb4SGk","customer_creation":"always","customer_details":{"address":{"city":"Rome","country":"FR","line1":"Via delle Carrozze, 87, rue du chemin°° & droite","line2":"rue du chemin°° & droite","postal_code":"00187","state":null},"email":"said.ladghem@gmail.com","name":"aze aze","phone":null,"tax_exempt":"none","tax_ids":[]},"customer_email":null,"expires_at":1658930853,"livemode":false,"locale":"fr","metadata":{"items":"[{\"price\":\"price_1LPUjUGYxr8yvqo4fgSirBBl\",\"quantity\":2}]"},"mode":"payment","payment_intent":"pi_3LPoQ5GYxr8yvqo407poTvAG","payment_link":null,"payment_method_options":{},"payment_method_types":["card"],"payment_status":"paid","phone_number_collection":{"enabled":false},"recovered_from":null,"setup_intent":null,"shipping":{"address":{"city":"Rome","country":"FR","line1":"Via delle Carrozze, 87, rue du chemin°° & droite","line2":"rue du chemin°° & droite","postal_code":"00187","state":""},"name":"aze aze"},"shipping_address_collection":{"allowed_countries":["FR"]},"shipping_options":[{"shipping_amount":0,"shipping_rate":"shr_1LPoQ5GYxr8yvqo4Y3XKrJf2"}],"shipping_rate":"shr_1LPoQ5GYxr8yvqo4Y3XKrJf2","status":"complete","submit_type":null,"subscription":null,"success_url":"http://localhost:3001/success?session_id={CHECKOUT_SESSION_ID}","total_details":{"amount_discount":0,"amount_shipping":0,"amount_tax":0},"url":null}},"livemode":false,"pending_webhooks":3,"request":{"id":null,"idempotency_key":null},"type":"checkout.session.completed"}

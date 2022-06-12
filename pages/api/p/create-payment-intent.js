// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

  const { items } = req.body;
  const customer = await stripe.customers.create();

  function calculateOrderAmount(items) {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  }

  async function chargeCustomer(customerId) {
    // Lookup the payment methods available for the customer
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: "card",
    });
    try {
      // Charge the customer and payment method immediately
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: "eur",
        customer: customerId,
        payment_method: paymentMethods.data[0].id,
        off_session: true,
        confirm: true,
      });
    } catch (err) {
      // Error code will be authentication_required if authentication is needed
      console.log("Error code is: ", err.code);
      const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(
        err.raw.payment_intent.id
      );
      console.log("PI retrieved: ", paymentIntentRetrieved.id);
    }
  }

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    setup_future_usage: "off_session",
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripeSecretKey = 'sk_test_51I3ShBJ79DiDp1GypzcToYLhobLX0SbRTTRlT3JbDaFIfa9PRxcywt8R40rtnaGN8rJy5DhJX6giV1STFkI4bd7800zuWWMVzo';
const stripe = require('stripe')(stripeSecretKey);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => {
  response.status(200).send('Hello World')
});

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "cad"
  });
  // OK -Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
// http://localhost:5001/cloned-react/us-central1/api

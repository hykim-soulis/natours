/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51LIcSeEEui0IhzWGM2jgKm5zUckpPcsznMmwSNlZUkIwZdWmNOpjDel7IO7qWRpHvGqTRrq1qL9A0HxuNWO4xajF001Iz64qKr'
    );
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

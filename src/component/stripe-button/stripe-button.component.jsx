import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Io6fWG72Ly9nPPXeWGwqzbThEVEjxXCpHtH7YnQu6jrCfYxeAE2nULhsedNhHgZMAshTNHbRi221RpwFtJpTcdB00FpIrgHvW";
  const onToken = (token) => {
    console.log(token);
    alert("Payment done");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop"
      billingAddress
      shippingAddress
      image="data:image/png;base64,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"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
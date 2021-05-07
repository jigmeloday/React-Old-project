import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";
import {
  selectCartItem,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import CheckOutItem from "../../component/check-out-item/checkout-item.component";
const Checkout = ({ cartItems, total, toggleCartHidden }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItems) => (
      <CheckOutItem key={cartItems.id} cartItem={cartItems} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <StripeCheckoutButton className="button" price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);

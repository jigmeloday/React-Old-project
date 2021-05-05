import React from "react";
import { connect } from "react-redux";
import CusButton from "../cus-button/cus-button.component";
import "./card-dropdown.style.scss";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItem } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CardDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItems) => (
          <CartItem key={cartItems.id} item={cartItems} />
        ))
      ) : (
        <span className="empty-message">Cart is empty</span>
      )}
    </div>
    <CusButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go To Checkout
    </CusButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
});

export default withRouter(connect(mapStateToProps)(CardDropdown));

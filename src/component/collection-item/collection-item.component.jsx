import React from "react";
import "./collection-item.style.scss";
import CusButton from "../cus-button/cus-button.component";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CusButton
        className="custom-button"
        onClick={() => addItems(item)}
        inverted
      >
        {" "}
        Add to cart
      </CusButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);

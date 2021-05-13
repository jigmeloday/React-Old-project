import React from "react";
import CusButton from "../cus-button/cus-button.component";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.action";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItems(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);

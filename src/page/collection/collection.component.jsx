import React from "react";
import "./collection.style.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../component/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <div className="title">Hello</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collection-overview.Style.scss";
import { selectCollectionsPreview } from "../../redux/shop/shop.selector";
import PreviewCollection from "../../component/preview-collection/preview-collection.component";

const CollectionOverView = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});
export default connect(mapStateToProps)(CollectionOverView);

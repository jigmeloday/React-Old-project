import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverView from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverView);

export default CollectionOverViewContainer;

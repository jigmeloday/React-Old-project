import { connect } from "react-redux";
import { selectCollectionsIsLoading } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsIsLoading(state),
});

const CollectionPageConainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageConainer;

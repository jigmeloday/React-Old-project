import React from "react";
import CollectionOverView from "../../component/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionFetching,
  selectCollectionsIsLoading,
} from "../../redux/shop/shop.selector";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionsFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionsFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectCollectionFetching,
  isCollectionLoaded: selectCollectionsIsLoading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

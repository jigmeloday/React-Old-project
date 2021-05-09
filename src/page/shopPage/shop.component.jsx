import React from "react";
import CollectionOverViewContainer from "../../component/collection-overview/collection-overview.contianer";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";
import CollectionPageConainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageConainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

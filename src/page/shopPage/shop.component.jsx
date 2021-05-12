import React from "react";
import CollectionOverViewContainer from "../../component/collection-overview/collection-overview.contianer";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";
import CollectionPageConainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

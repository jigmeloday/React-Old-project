import React from "react";
import CollectionOverView from "../../component/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.util";
import { updateCollections } from "../../redux/shop/shop.action";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapShotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

import React, { useEffect } from "react";
import HomePage from "./page/homepage/homepage.component";
import Checkout from "./page/checkout/checkout.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./page/shopPage/shop.component";
import Header from "./component/header/header.component";
import Auth from "./page/auth/auth.component";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { GlobalStyle } from "./global.style";
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shops" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/profile"
          render={() => (currentUser ? <Redirect to="/profile" /> : <Auth />)}
        />
        <Route
          exact
          path="/auth"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

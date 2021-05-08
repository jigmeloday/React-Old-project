import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assest/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.util";
import CaerdIcon from "../card-icon/card-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/user/user.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  HeaderContainer,
  LogoCointainer,
  OptionCotainer,
  OptionLink,
} from "./header.style";
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoCointainer to="/">
      <Logo className="logo" />
    </LogoCointainer>
    <OptionCotainer>
      <OptionLink to="/">Home</OptionLink>
      <OptionLink to="/shops">Shop</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      {!!currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/auth">Sign Up</OptionLink>
      )}
      <CaerdIcon />
    </OptionCotainer>
    {hidden ? null : <CardDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assest/4.3 crown.svg.svg";
import CaerdIcon from "../card-icon/card-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/user/user.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.action";
import {
  HeaderContainer,
  LogoCointainer,
  OptionCotainer,
  OptionLink,
} from "./header.style";
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoCointainer to="/">
      <Logo className="logo" />
    </LogoCointainer>
    <OptionCotainer>
      <OptionLink to="/">Home</OptionLink>
      {!!currentUser ? <OptionLink to="/profile">Profile</OptionLink> : <></>}
      <OptionLink to="/shops">Shop</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      {!!currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
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
const mapDispatchToProps = (dispacth) => ({
  signOutStart: () => dispacth(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

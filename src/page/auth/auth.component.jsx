import React from "react";
import "./auth.style.scss";
import SignIn from "../../component/auth/sign-in/sign-in.component";
import SignUp from "../../component/auth/signUp/sign-up.component";

const Auth = () => (
  <div className="sign-in-and-sign-up ">
    <SignIn />
    <SignUp />
  </div>
);
export default Auth;

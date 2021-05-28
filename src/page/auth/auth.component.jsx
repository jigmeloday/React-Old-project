import React from "react";
import { SignInAndSignUpContainer } from "./auth.style";
import SignIn from "../../component/auth/sign-in/sign-in.component";
import SignUp from "../../component/auth/signUp/sign-up.component";

const Auth = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);
export default Auth;

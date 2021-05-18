import React, { useState } from "react";
import "./sign-in.style.scss";
import { connect } from "react-redux";
import FormInput from "../../../component/form-input/form-input.component";
import CusButton from "../../cus-button/cus-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../../redux/user/user.action";
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          type="email"
          required
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          name="password"
          value={password}
          type="password"
          required
          onChange={handleChange}
          label="Password"
        />
        <div className="button">
          <CusButton type="submit">Sign In</CusButton>
          <CusButton type="button" onClick={googleSignInStart} isGoogle>
            {""}Sign In With Google{""}
          </CusButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);

import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-up.style.scss";
import FormInput from "../../form-input/form-input.component";
import CusButton from "../../cus-button/cus-button.component";
import { signUpStart } from "../../../redux/user/user.action";
const SignUp = ({ signUpStart }) => {
  const [userCredential, setCredentail] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const { email, password, displayName } = userCredential;
  const handleSubmit = async (event) => {
    event.preventDefault();
    signUpStart({ displayName, email, password });
  };
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setCredentail({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sing-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <CusButton type="submit">Sign Up</CusButton>
      </form>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchtoProps)(SignUp);

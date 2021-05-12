import React from "react";
import "./sign-in.style.scss";
import { connect } from "react-redux";
import FormInput from "../../../component/form-input/form-input.component";
import CusButton from "../../cus-button/cus-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../../redux/user/user.action";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            required
            onChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            required
            onChange={this.handleChange}
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
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);

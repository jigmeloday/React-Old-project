import React from 'react'
import './sign-in.style.scss'
import FormInput from '../../../component/form-input/form-input.component'
import CusButton from "../../cus-button/cus-button.component";
import {signInWithGoogle} from "../../../firebase/firebase.util";

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }
    handleChange = (event => {
        const {name, value} = event.target;
        this.setState({ [name]: value})
    });
    handleSubmit = (event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    });

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} type='email' required onChange={this.handleChange} label='Email'/>
                    <FormInput name='password' value={this.state.password} type='password' required onChange={this.handleChange} label='Password'/>
                   <div className='button'>
                       <CusButton type='submit'>Sign In</CusButton>
                       <CusButton onClick={signInWithGoogle} isGoogle>{''}Sign In With Google{''}</CusButton>
                   </div>
                </form>
            </div>
        );
    }
}
export default SignIn;

import React from 'react';
import './sign-up.style.scss';
import FormInput from '../../form-input/form-input.component';
import CusButton from '../../cus-button/cus-button.component';
import {auth, createUserProfileDoc} from "../../../firebase/firebase.util";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        try {
            const {displayName, email, password} = this.state;
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: ''
            })
        } catch (e) {
                console.log('error', e.message)
        }

    };
    handleChange = async event => {
      const {name, value} = event.target;
      this.setState({[name]: value});
    };

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sing-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={this.state.displayName} onChange={this.handleChange} label='Name'
                               required/>
                    <FormInput name='email' type='email' value={this.state.email} onChange={this.handleChange} label='Email'
                               required/>
                    <FormInput name='password' type='password' value={this.state.password} onChange={this.handleChange}
                               label='Password' required/>
                    <CusButton type='submit'>Sign Up</CusButton>
                </form>
            </div>
        )
    }

}

export default SignUp;

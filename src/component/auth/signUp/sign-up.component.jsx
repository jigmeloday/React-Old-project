import React from 'react';
import './sign-up.style.scss';
import FormInput from '../../form-input/form-input.component';
import CusButton from '../../cus-button/cus-button.component';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

    };

    render() {
        const {name, email, password} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sing-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='name' type='text' value={name} onChange={this.handleChange} label='Name' required/>
                    <FormInput name='email' type='email' value={email} onChange={this.handleChange} label='Email'
                               required/>
                    <FormInput name='password' type='password' value={password} onChange={this.handleChange}
                               label='Password' required/>
                    <CusButton type='submit'>Sign Up</CusButton>
                </form>
            </div>
        )
    }

}

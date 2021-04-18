import React from 'react'
import './sign-in.style.scss'
import FormInput from '../../../component/form-input/form-input.component'
import CusButton from "../../cus-button/cus-button.component";
import {auth, signInWithGoogle} from "../../../firebase/firebase.util";
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
    handleSubmit = ( async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (e) {
            console.log(e.message)

        }
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

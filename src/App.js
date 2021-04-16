
import './App.css';
import React from 'react'
import HomePage from "./page/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from './page/shopPage/shop.component';
import Header from './component/header/header.component';
import Auth from './page/auth/auth.component'
import {auth} from './firebase/firebase.util'

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div>
                <Header currentUser = {this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shops' component={ShopPage}/>
                    <Route exact path='/auth' component={Auth}/>
                </Switch>
            </div>
        );
    }
}

export default App;

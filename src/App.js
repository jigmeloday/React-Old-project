
import './App.css';
import React from 'react'
import HomePage from "./page/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from './page/shopPage/shop.component';
import Header from './component/header/header.component';
import Auth from './page/auth/auth.component'
import {auth, createUserProfileDoc} from './firebase/firebase.util'
import {connect} from "react-redux";
import { setCurrentUser} from "./redux/user/user.action";

class App extends React.Component{

    unsubscribeFromAuth = null;
    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDoc(user);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                    });
                });

            } else {
                setCurrentUser({user})
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shops' component={ShopPage}/>
                    <Route exact path='/auth' component={Auth}/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps) (App);

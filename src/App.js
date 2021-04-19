
import './App.css';
import React from 'react'
import HomePage from "./page/homepage/homepage.component";
import {Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './page/shopPage/shop.component';
import Header from './component/header/header.component';
import Auth from './page/auth/auth.component'
import {auth, createUserProfileDoc} from './firebase/firebase.util'
import {connect} from "react-redux";
import {purgeUser, setCurrentUser} from "./redux/user/user.action";

class App extends React.Component{

    unsubscribeFromAuth = null;
    componentDidMount() {
        const {setCurrentUser, purgeUser} = this.props;
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
                purgeUser({user})
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
                    <Route exact path='/auth' render ={() => this.props.currentUser ? (<Redirect to='/'/>) : (<Auth/>)}/>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = ({user}) => ({
   currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    purgeUser: user => dispatch(purgeUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);

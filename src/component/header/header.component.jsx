import React from 'react'
import './header.style.scss'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {ReactComponent as Logo} from "../../assest/4.3 crown.svg.svg";
import {auth} from '../../firebase/firebase.util'
const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/'>Home</Link>
            <Link className='option' to='/shops'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            {
                !!(currentUser) ?
                   (<div className='option' onClick={() => auth.signOut()}>
                        Sign Out
                    </div>)
                    :
                    (<Link className='option' to='/auth'>Sign Up</Link>)
            }
            {/*<Link>{currentUser}</Link>*/}
        </div>

    </div>
);
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);

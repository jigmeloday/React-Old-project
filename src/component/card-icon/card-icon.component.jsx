import React from 'react'
import './card-icon.style.scss'
import {ReactComponent as ShoppingIcon} from "../../assest/11.2 shopping-bag.svg.svg";
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {connect} from "react-redux";

const CardIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps) (CardIcon);

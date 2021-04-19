import React from 'react';
import {connect} from "react-redux";
import CusButton from '../cus-button/cus-button.component';
import './card-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from "../../redux/cart/cart.selector";

const CardDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
               cartItems.map(cartItems => <CartItem key={cartItems.id} item={cartItems}/>)
            }
        </div>
        <CusButton>Go To Checkout</CusButton>
    </div>
);

const mapStateToProps = (state) => (
    {
        cartItems: selectCartItem(state)
    }
);

export default connect(mapStateToProps)(CardDropdown);


import React from 'react';
import CusButton from '../cus-button/cus-button.component';
import './card-dropdown.style.scss'

const CardDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        </div>
        <CusButton>Go To Checkout</CusButton>
    </div>
);

export default CardDropdown;


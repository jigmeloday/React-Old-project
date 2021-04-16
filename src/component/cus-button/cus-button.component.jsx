import React from 'react'
import './cus-button.style.scss'
const CusButton =({children, isGoogle, ...otherButtonProps}) => (
    <button className={`${isGoogle ? 'google-sign-in': ''} custom-button`}  {...otherButtonProps} >
        {children}
    </button>
);
export default CusButton;

import React from 'react'
import './cus-button.style.scss'
const CusButton =({children, ...otherButtonProps}) => (
    <button className='custom-button'  {...otherButtonProps} >
        {children}
    </button>
);
export default CusButton;

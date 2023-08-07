import React from 'react';
import '../styles/navbar.css';

function Navbar({ size, setShow }) {
    return (
        <div className='navbar'>
            <div className='do'>
                <span className='text ' onClick={() => setShow(true)}>DxO Shop</span>
            </div>
            <div className="cart" onClick={() => setShow(false)}>
                <span className='text number'>Click: {size}</span>
            </div>
        </div>
    )
}

export default Navbar

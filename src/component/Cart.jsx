import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/cart.css'

function Cart({ cart, setCart, handleChange }) {
    const [price, setPrice] = useState(0)
    function handleRemove(id) {
        const arr = cart.filter((item) => item.id != id)
        setCart(arr)
    }

    const handllePrice = () => {
        let ans = 0;
        cart.map((item) => {
            ans += item.amount * item.price;
        })
        setPrice(ans)
    }

    useEffect(() => {
        handllePrice()
    })
    return (
        <div className='all'>
            <article className='card-boxes'>
                {
                    cart.map((item) => (
                        <div className="cat-box" key={item.id}>
                            <div className="img">
                                <img src={item.img} alt="" />
                                <h4>{item.title}</h4>
                            </div>
                            <div className="buttons">

                            </div>
                            <div className="remove">
                                <button onClick={() => handleChange(item, +1)}>+</button>
                                <button onClick={() => handleChange(item, -1)}>-</button>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                                <h3>Price: {item.price}</h3>
                            </div>
                            <div className="total">
                            </div>
                        </div>
                    ))
                }
            </article>
            <h2>Total price of Cart : Rs.{price}/-</h2>
        </div>
    )
}

export default Cart

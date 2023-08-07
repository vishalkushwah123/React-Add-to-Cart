import React from 'react'
import '../styles/Card.css'


function Card({ item, handleClick }) {
    const { title, author, price, img } = item
    return (
        <section className='card-section'>
            <div className='card'>
                <div className="image">
                    <img src={img} alt="logo" />
                </div>
                <div className="content">
                    <h5>{title}</h5>
                    <p className='author'>{author}</p>
                    <p className='price'>Price: Rs.{price}/-</p>
                    <button className='add' onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
        </section>
    )
}

export default Card

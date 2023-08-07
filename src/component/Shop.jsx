import React from 'react'
import Card from './Card'
import list from '../list'
import '../styles/Card.css'

function Shop({ handleClick }) {
    return (
        <div className='card-section'>
            {
                list.map((item) => {
                    return <Card item={item} key={item.id} handleClick={() => handleClick(item)} />
                })
            }
        </div>
    )
}

export default Shop

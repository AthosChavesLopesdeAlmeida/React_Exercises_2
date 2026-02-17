import React from 'react'
import CardTop from './CardTop'
import CardBottom from './CardBottom'
import './card.css'

const FullCard = ({ product }) => {
  
  return (
    <div className='card' key={product.id}>
      <CardTop product={product}/>
      <CardBottom product={product}/>
    </div>
  )
}

export default FullCard
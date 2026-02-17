import React from 'react'
import { FaStar } from '../../../node_modules/react-icons/fa'
import './card.css'

const CardBottom = ({ product }) => {
  
const getStockType = () => {
    switch(product.type) {
      case 'physical':
        return (
            <p>Estoque: {product.stock}</p>
        )
      case 'digital':
        return (
            <p> Tamanho: {product.downloadSize}</p>
        )
      case 'service':
        return (
            <p> Duração: {product.duration}</p>
        )
      default:
        return null
    }
  }

  const getShippingType = () => {
    switch(product.type) {
      case 'physical':
        return (
            <p>{product.shipping}</p>
        )
      case 'digital':
        return (
            <p>{product.format}</p>
        )
      case 'service':
        return (
            <p>{product.availability}</p>
        )
      default:
        return null
    }
  }

  return (
    <div className='card_bottom_container'>
      
      <div className='card_info_container'>
        <h4>{product.name}</h4>
        <span className='product_price'>${product.price}</span>
        <p className='rating'>
          <FaStar/> {product.rating} <span className='reviews'>&#40;{product.reviews}&#41;</span>
        </p>
        <p className='product_stock'>{getStockType()}</p>
        <p className='product_shipping'>{getShippingType()}</p>
      </div>
      
      <div className='card_buttons_container'>
        <button className='buy-btn'>Buy Now</button>
        <button className='add_to_cart_btn'>Add to Cart</button>
      </div>

    </div>
  )
}

export default CardBottom
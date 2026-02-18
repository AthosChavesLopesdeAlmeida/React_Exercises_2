import React from 'react'
import FullCard from './FullCard'
import { UseShop } from '../data_and_context/UseShop'
import './card.css'

const CardsGrid = ({ products }) => {
  const { isGrid } = UseShop()
  
  return (
    <div className={isGrid ? 'cards_grid' : 'cards_line'}>
      {products.map((product) => {
        return (
          <FullCard product={product}/>
        )
      })}
    </div>
  )
}

export default CardsGrid
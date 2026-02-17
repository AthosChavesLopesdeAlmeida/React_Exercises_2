import React from 'react'

const CardTop = ({ product }) => {
  const hasBadges = product.badges || product.badges.length > 0

  return (
    <div className="card-top-container"> 
      {hasBadges && (
        <div className="badges-wrapper"> 
          {product.badges.map((badge, index) => (
            <span key={index} className={`badge`}>
              {badge.toUpperCase()}
            </span>
          ))}
        </div>
      )}
      <img src={product.image} alt={product.name} className="card-image" />
    </div>
  )
}

export default CardTop
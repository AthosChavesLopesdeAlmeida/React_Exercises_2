import { createContext, useState } from 'react';
import { products } from './data';

const ShopContext = createContext();

export function ShopProvider ({ children }) {
  const [isGrid, setIsGrid] = useState(products)
  const [shopItems, setShopItems] = useState([])

  const changeVisualization = () => {
    setIsGrid(!isGrid)
  }

    const filterItems = (items, type) => {
    if (!type) {
      setShopItems(items)
      return
    }
    
    const filteredItems = items.filter((item) => item.type === type)
    setShopItems(filteredItems) 
  }

    const value = {
    shopItems,
    isGrid, 
    filterItems,
    changeVisualization,
    setShopItems 
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopProvider
export { ShopContext }
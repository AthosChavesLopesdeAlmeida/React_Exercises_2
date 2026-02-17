import ShopProvider from './shop_cards/data_and_context/ShopContext'
import { UseShop } from './shop_cards/data_and_context/UseShop'
import CardsGrid from './shop_cards/card/CardsGrid'
import { products } from './shop_cards/data_and_context/data'
import { useEffect } from 'react'

function App() {

  const { setShopItems, filterItems, changeVisualization, isGrid, shopItems } = UseShop()

  useEffect(() => {
    setShopItems(products)
  }, [setShopItems])

   const handleFilterChange = (event) => {
    const type = event.target.value
    
    if (type === 'all') {
      setShopItems(products)
    } else {
      filterItems(products, type)
    }
  }

  return (
    <ShopProvider>
      <main>
        
        <header className='header_container'>
          <select onChange={handleFilterChange}>
            <option value="all">Todos</option>
            <option value="physical">Físicos</option>
            <option value="digital">Digitais</option>
            <option value="service">Serviços</option>
          </select>
          <h1>Selling Shop</h1>
          <button onClick={changeVisualization}>
            {isGrid ? 'Ver em lista' : 'Ver em grade'}
          </button>
        </header>
        
        <section>
          <CardsGrid products={shopItems}/>
        </section>

      </main>
    </ShopProvider>
  )
}

export default App
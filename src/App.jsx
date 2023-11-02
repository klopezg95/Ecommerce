import { products } from './mocks/products.json'
import Products from './components/Products.jsx'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [user,setUser] = useState([])
  const[products] = useState(initialProducts)
  const [filters, setFilters]= useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) =>{

    return products.filter(product => {

      return(
        product.price >= filters.minPrice &&
        (
            filters.category === 'all' || product.category === filters.category
        )
      )
    })
    
  }

  return ( <div>
    {/* {
      !user.length > 0 ? <Login setUser={setUser}/> : <Products products={products} setUser={setUser} />
    } */}
    <Products products={products}/>
    </div>
  )
}

export default App

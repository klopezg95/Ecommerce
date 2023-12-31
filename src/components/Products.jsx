// import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

const Products = ({ products, setUser }) => {

    const logOut = () => {
        setUser([])
    }
    
    return (
        <main>
            <button onClick={logOut}>Log out</button>
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Products;
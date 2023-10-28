// import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

function Products ({ products }){
    return(
        <main>
            <ul>
                {products.map(product =>(
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong>
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Products;
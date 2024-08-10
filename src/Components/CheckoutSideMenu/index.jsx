import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

function CheckoutSideMenu() {

  const context = useContext(ShoppingCartContext)
  // console.log('CART:', context.cartProducts)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)

  }

  return (
    <aside className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div className="size-6 text-black">
          <XMarkIcon className='cursor-pointer' onClick={context.CloseCheckoutSideMenu} />
        </div>
      </div>
      <div className='mx-6'>
        {
          context.cartProducts.map((product) => {
            return <OrderCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} handleDelete={handleDelete} />
          })
        }
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-medium text-lg'>Total:</span>
          <span className='font-bold text-2xl'>${totalPrice(context.cartProducts).toFixed(2)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
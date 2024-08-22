import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {

  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1


  console.log('CARRITO', context.cartProducts)
  console.log('Order:', context.order);
  console.log('Index:', index);
  console.log('Selected Order:', context.order?.[index]);
  console.log('Products:', context.order?.[index]?.cartProducts);
  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="grid grid-cols-4 gap-10 w-full max-w-screen-lg">
        {
          context.order?.[index]?.cartProducts?.length > 0 ? (
            context.order[index].cartProducts.map(product => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                numProduct={product.quantity}
                state="order"
              />
            ))
          ) : (
            <p>No hay productos en la orden.</p>
          )
        }
      </div>
    </Layout>
  )
}

export default MyOrder
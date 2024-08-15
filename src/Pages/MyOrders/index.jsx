import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import OrdersCard from '../../Components/OrdersCard'



function MyOrders() {

  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center w-80'>
        <h1>My Orders</h1>
      </div>

      {
        context.order.map((order, index) => (

          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../Context'
import './styles.css'

function ProductDetail() {

  const context = useContext(ShoppingCartContext)
  
  return (
    <aside  className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div className="size-6 text-black">
                <XMarkIcon className='cursor-pointer'onClick={context.CloseProductDetail}/>
            </div>
        </div>
        <figure className='px-6'>
          <img className='w-full h-full rounded-lg' 
          src={context.ProductToShow.images} 
          alt={context.ProductToShow.title} />
        </figure>
        <p className='flex flex-col p-6'> 
            <span className='font-bold text-2xl mb-2'>${context.ProductToShow.price}</span>
            <span className='font-medium text-md'>{context.ProductToShow.title}</span>
            <span className='font-light text-sm'>{context.ProductToShow.description}</span>  
        </p>
    </aside>
  )
}

export default ProductDetail


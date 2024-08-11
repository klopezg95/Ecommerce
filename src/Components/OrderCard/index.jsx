import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'



const OrderCard = (props) => {

    const { id, title, image, price, handleDelete } = props
    const context = useContext(ShoppingCartContext)
    const [quantity, setQuantity] = useState(1)
    const [precio, setPrecio] = useState(price)

    /** UN POSIBLE USEFFECT ??  para evitar correr la funcion antes de que se renderice el componente
     * PD: mirar bien el flujo del proyecto para asi posiblemente solucionar el tema de la suma total universal en el checkoutsidemenu
    */
    const countQuantity = () => {
        handleDelete(id)
        context.setCount(context.count - quantity)
    }

    const masCantidad = () => {
        setQuantity(quantity + 1)
        context.increment()
        setPrecio(precio + price)

    }

    const menosCantidad = () => {

        if (quantity === 0) {
            return;
        }
        setQuantity(quantity - 1)
        context.decrement()
        setPrecio(precio - price)

    }


    /**
     * !!!!!!!!-----> ATENTION <------!!!!!!
     * PROBLEMAS A RESOLVER:
     * 1) la sumatoria por cantidad de veces que lleva el producto
     * 2)al dar click en el producto que me borre la cantidad de productos de ese mismo que llevo en el carrito
     */


    return (
        <div className='border border-black my-6 rounded-md'>
            <div className='flex justify-end mt-1 mr-1'>
                <TrashIcon
                    className='cursor-pointer size-6 text-black'
                    onClick={countQuantity}
                />
            </div>
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <figure className='w-20 h-20'>
                        <img className='w-full h-full m-1 rounded-lg object-cover' src={image} alt={title} />
                    </figure>
                    <p className='text-sm font-light text-center mx-1'>{title}</p>
                </div>
            </div>
            <div className='flex justify-between px-2 mt-2'>
                <div className='flex my-2 items-center'>
                    <button className="bg-red-600 w-6 h-6 flex justify-center items-center" onClick={menosCantidad}><MinusIcon className='size-4 ' /></button>
                    <p className='mx-2 text-lg'>{quantity === 0 ? handleDelete(id) : quantity}</p>
                    <button className=" bg-green-600 w-6 h-6 flex justify-center items-center" onClick={masCantidad}><PlusIcon className='size-4' /></button>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-sx font-medium'>${precio.toFixed(2)}</p>

                </div>
            </div>
        </div>
    )
}

export default OrderCard
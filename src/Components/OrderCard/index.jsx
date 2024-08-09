import { PlusIcon, TrashIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'



const OrderCard = (props) => {

    const { id, title, image, price, handleDelete } = props

    const context = useContext(ShoppingCartContext)
    const [quantity, setQuantity] = useState(1)

    const masCantidad = () => {
        context.increment()
        setQuantity(quantity + 1)
    }

    const menosCantidad = () => {
        context.decrement()
        if (quantity === 0) {
            return;
        }
        setQuantity(quantity - 1)
    }


    return (
        <div className='border border-black my-6'>
            <div className='flex justify-end mt-1 mr-1'>
                <TrashIcon
                    className='cursor-pointer size-6 text-black'
                    onClick={() => handleDelete(id)}
                />
            </div>
            <div className="flex justify-between items-center mb-5">
                <div className='flex items-center gap-2'>
                    <figure className='w-20 h-20'>
                        <img className='w-full m-1 rounded-lg object-cover ' src={image} alt={title} />
                    </figure>
                    <p className='text-sm font-light text-center pr-2'>{title}</p>
                </div>

            </div>
            <div className='mt-1 px-2 flex justify-between'>
                <div className='flex my-2'>
                    <button onClick={menosCantidad} className='bg-red-500 w-8 h-8 rounded-md flex justify-center items-center font-extrabold '><MinusIcon className=' size-4' /></button>
                    <p className='mx-2 text-xl'>{quantity}</p>
                    <button onClick={masCantidad} className='bg-green-500 w-8 rounded-md flex justify-center items-center font-bold'><PlusIcon className='size-4' /></button>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-medium'>${price}</p>

                </div>
            </div>
        </div>
    )
}

export default OrderCard
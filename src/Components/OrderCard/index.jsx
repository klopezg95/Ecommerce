import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'



const OrderCard = (props) => {

    const { id, title, image, price, numProduct } = props
    const context = useContext(ShoppingCartContext)

    // let renderTrashIcon
    // if (handleDelete) {
    //     renderTrashIcon = <TrashIcon className='cursor-pointer size-6 text-black' onClick={() => countQuantity} />
    // }

    const getQuantity = () => {
        const product = context.cartProducts.find(product => product.id === id);
        return product.quantity;
    }

    const addProductToCart = () => {
        const product = context.cartProducts.find(product => product.id === id);
        context.addToCart(product);
    }

    const pricePerProduct = () => {
        const product = context.cartProducts.find(product => product.id === id);
        return product.price * product.quantity;
    }

    return (
        <div className='border border-black my-6 rounded-md'>
            {/* {renderTrashIcon} */}
            <div className='flex justify-end mt-1 mr-1'>
                <TrashIcon
                    className='cursor-pointer size-6 text-black'
                    onClick={() => context.deleteProductFromCart(id, 1)}
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
                    <button className="bg-red-600 w-6 h-6 flex justify-center items-center" onClick={() => context.deleteProductFromCart(id, 1)}><MinusIcon className='size-4 ' /></button>
                    <p className='mx-2 text-lg'>{getQuantity()}</p>
                    <button className=" bg-green-600 w-6 h-6 flex justify-center items-center" onClick={addProductToCart}><PlusIcon className='size-4' /></button>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-sx font-medium'>${pricePerProduct()}</p>

                </div>
            </div>
        </div>
    )
}

export default OrderCard
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'



const OrderCard = (props) => {

    const { id, title, image, numProduct, state, price } = props
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
        <>
            <div className="flex justify-between items-center mb-3 relative border border-black p-2 rounded-lg">
                <div className="flex items-center gap-2">
                    <figure className="w-16 h-16">
                        <img src={image} alt={title} className="w-full h-full rounded-lg object-cover" />
                    </figure>
                    <div className="flex items-center mx-1">
                        <p className="font-medium text-sm">{numProduct}</p>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <p className="font-light text-sm">{title}</p>
                        {state === "checkoutSideMenu" ? (
                            <div className="flex justify-between items-center w-[80px]">
                                <button
                                    className="flex justify-center items-center w-5 h-5 bg-red-400 rounded-md"
                                    onClick={() => context.deleteProductFromCart(id, 1)}
                                >-</button>
                                <p>{getQuantity()}</p>
                                <button
                                    className="flex justify-center items-center w-5 h-5 bg-green-400 rounded-md"
                                    onClick={addProductToCart}
                                >+</button>
                            </div>)
                            : null
                        }
                    </div>
                </div>
                <div className="">
                    <p className="font-bold text-lg mt-12">${(state === "order" ? price : pricePerProduct().toFixed(2))}</p>
                    {state === "checkoutSideMenu" ? (
                        <button className="absolute top-0 right-0" onClick={() => context.deleteProductFromCart(id, -1)}>
                            <TrashIcon className="h-6 w-6 text-black" />
                        </button>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default OrderCard
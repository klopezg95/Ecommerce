import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react'

const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props


    return (
        <div className='flex justify-center items-center border border-black w-80 p-4 rounded-lg mb-4'>
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>01.02.23</span>
                    <span className='font-medium'>{totalProducts} articles</span>
                </div>
                <span className='font-bold text-2xl'>${totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard
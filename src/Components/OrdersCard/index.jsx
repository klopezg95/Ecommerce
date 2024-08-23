import { ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react'

const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props


    return (
        <div className='flex justify-center items-center border border-black w-80 p-4 rounded-lg mb-4'>
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>01.02.23</span>
                    <div className='flex flex-row justify-between gap-2'>
                        <ShoppingBagIcon className='text-black w-5 h-5' />
                        <span className='font-medium'>
                            {totalProducts} articles</span>
                    </div>

                </div>
                <div className='flex justify-between items-center gap-2'>
                    <span className='font-bold text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </div>
            </p>
        </div>
    )
}

export default OrdersCard
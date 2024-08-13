import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react'

import { totalPrice } from '../../utils'



const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props


    return (
        <div className='flex justify-center items-center mb-3 border border-black'>
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard
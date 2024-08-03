import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = (props) => {

    const {title, image, price} = props
    return (
        <div className="flex justify-between items-center my-6">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt={title}/>
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sx font-medium'>${price}</p>
                <XMarkIcon className='cursor-pointer size-6 text-black'/>
            </div>
        </div>
    )
}

export default OrderCard
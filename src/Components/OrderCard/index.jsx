import { XMarkIcon } from '@heroicons/react/24/solid'



const OrderCard = (props) => {

    const { id,title, image, price, handleDelete } = props


    return (
        <div className='border border-black my-6'>
            <div className='flex justify-end mt-1 mr-1'>
            <XMarkIcon 
            className='cursor-pointer size-6 text-black'
            onClick={() => handleDelete(id)}
            />
            </div>
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <figure className='w-20 h-20'>
                        <img className='w-full h-full m-1 rounded-lg object-cover' src={image} alt={title} />
                    </figure>
                    <p className='text-sm font-light'>{title}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-sx font-medium'>${price}</p>

                </div>
             </div>
            <div className=''>
                <div className='flex'>
                    <button>+</button>
                    <p>0</p>
                    <button>+</button>
                </div>
            </div>
        </div> 
    )
}

export default OrderCard
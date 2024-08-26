import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

function Navbar() {

    const { productCounter, setSearchByCategory } = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-m font-light'>
            <ul className='flex items-center gap-4'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'>
                        Shoppy
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        onClick={() => setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/men'
                        onClick={() => setSearchByCategory('men')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Men's
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/women'
                        onClick={() => setSearchByCategory('women')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Women's
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        onClick={() => setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jewelry'
                        onClick={() => setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        onClick={() => setSearchByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-4'>
                <li>
                    <NavLink
                        to='/'
                        className='text-black/60'
                    >
                        Ander@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign in
                    </NavLink>
                </li>
                <li className='size-7 text-black cursor-pointer flex items-center'>
                    <ShoppingBagIcon />
                    <div>
                        {productCounter}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
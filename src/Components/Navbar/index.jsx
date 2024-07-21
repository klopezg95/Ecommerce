import { NavLink } from 'react-router-dom'

function Navbar() {

    const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-m font-light'>
        <ul className='flex items-center gap-4'>
            <li className='font-semibold text-lg'>
                <NavLink 
                to='/'>
                    Shoppy
                </NavLink>
            </li>
            <li>
                <NavLink to='/'
                className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/clothes'
                className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics'
                className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/furnitures'
                className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys'
                className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/others'
                className={({isActive}) =>
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
                className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'
                className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in'
                className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                    Sign in
                </NavLink>
            </li>
            <li>
                    Carrito
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
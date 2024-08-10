import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    //counter Shoppingcart - Quantity
    const [count, setCount] = useState(0)


    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const OpenProductDetail = () => setIsProductDetailOpen(true)
    const CloseProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail - Show product

    const [productToShow, setProductToShow] = useState({})

    //Shoppingcart · add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Checkout side menu - Open/Close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)
    const OpenCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const CloseCheckoutSideMenu = () => setIsCheckoutSideMenu(false)




    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            increment,
            decrement,
            OpenProductDetail,
            CloseProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            // ShowProduct
            isCheckoutSideMenu,
            OpenCheckoutSideMenu,
            CloseCheckoutSideMenu,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    //counter Shoppingcart - Quantity
    const [count, setCount] = useState(0)


    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count === 0) {
            return;
        }
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

    //Shopping Cart · Order
    const [order, setOrder] = useState([])

    //Add quantities to products · MyOrder
    const [productCounter, setProductCounter] = useState(0);

    const addToCart = (product) => {
        const productAdded = cartProducts.some(item => item.id === product.id);
        if (!productAdded) {
            setCartProducts([...cartProducts, {
                ...product,
                quantity: 1,
            }].sort((a, b) => a.title.localeCompare(b.title)));
        } else {
            const filteredProducts = cartProducts.filter(item => item.id !== product.id);
            setCartProducts([...filteredProducts, {
                ...product,
                quantity: product.quantity + 1,
            }].sort((a, b) => a.title.localeCompare(b.title)));
        }
    }
    /**
 * @param {Number} id : Product ID 
 * @param {Number} quantity : Quantity to delete (if -1, delete all)
 * @returns : void
 */
    const deleteProductFromCart = (id, quantity) => {
        if (quantity === -1) {
            const filteredProducts = cartProducts.filter(product => product.id !== id);
            setCartProducts(filteredProducts);
        } else {
            const filteredProducts = cartProducts.filter(product => product.id !== id);
            const product = cartProducts.find(product => product.id === id);
            if (product.quantity === 1) return setCartProducts(filteredProducts);
            setCartProducts([...filteredProducts, {
                ...product,
                quantity: product.quantity - quantity,
            }].sort((a, b) => a.title.localeCompare(b.title)));
        }
    }
    const emptyCart = () => setCartProducts([]);
    useEffect(() => {
        const counter = cartProducts.reduce((acc, product) => acc + product.quantity, 0);
        setProductCounter(counter);
    }, [cartProducts]);



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
            isCheckoutSideMenu,
            OpenCheckoutSideMenu,
            CloseCheckoutSideMenu,
            order,
            setOrder,
            addToCart,
            deleteProductFromCart,
            productCounter,
            emptyCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


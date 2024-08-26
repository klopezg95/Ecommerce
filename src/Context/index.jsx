import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {


    //GETTING PRODUCTS API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    //Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    // const [searchedItem, setSearchedItem] = useState(null);

    //Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    //Get Products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))

    }

    // FILTER TITLE AND CATEGORY · TRACKER
    const filterBy = (searchType) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }
    useEffect(() => {

        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory)) // BOTH FLASE
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY-TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory)) //BOTH TRUE
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory)) //TRUE AND FALSE
        if (searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))//FALSE AND TRUE

    }, [items, searchByTitle, searchByCategory])
    //Counter Shoppingcart - Quantity
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
            items,
            setItems,
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
            emptyCart,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


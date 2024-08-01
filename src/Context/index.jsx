import { createContext, useState } from "react"; 

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{

    //counter Shoppingcart - Quantity
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }
    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const OpenProductDetail = () => setIsProductDetailOpen(true)
    const CloseProductDetail = () => setIsProductDetailOpen(false)
    
    //Product Detail - Show product
    
    const [ProductToShow, setProductToShow] = useState({})



    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            increment,
            OpenProductDetail,
            CloseProductDetail,
            isProductDetailOpen,
            ProductToShow,
            setProductToShow,
            // ShowProduct
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


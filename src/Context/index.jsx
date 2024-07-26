import { createContext, useState } from "react"; 

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{
    const [count, setCount] = useState(0)
    // console.log('COUNT:' + count)
    
    const increment = () =>{
        setCount(count + 1)
    }
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            increment
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


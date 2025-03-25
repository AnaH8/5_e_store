'use client'

import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

export default function ProductsProvider(props) {
  const {children} = props

  const [cart, setCart] = useState({})    //empty cart at the start;  = global state

    function handleIncrementProduct(price_id, num){
        const newCart = {
            ...cart,
        }
        if (price_id in cart){
            //the product is already in the cart, so increment/decrement the previous value
            newCart[price_id] = newCart[price_id] + num
        } else {
            //product not yet in cart, so add it
            newCart[price_id] = num
        } 
        
        if (newCart[price_id] === 0) {
            //the user has set the num to 0, so we need to remove the product from cart
            delete newCart[price_id]
        }

        setCart(newCart)
    }

    
  const value = {              //we pass this to the children
    cart,
    handleIncrementProduct,
  
  }
  return (
    <ProductContext.Provider value={value}>
        {children}   {/*This is the entire application, context is a global wrapper
                      everything wrapped by the context can gain access to the data specific to the context  */}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)     //custom hook, makes it easy to gain access to the global context inside of any component

// import React with useState and createContext
import { createContext, useState, useEffect, useMemo } from 'react';

export const CartContext = createContext({
    addWineToCart : () => {}, 
    cart : [], 
}); 

export function CartContextProvider({children}){
    const [cart, setCart] = []; 

    const addCart = (newWine) => {
        setCart((oldWines)=> [...oldWines, newWine]); 
    }

    const memoizedValue = useMemo(() => ({
        cart, 
        addCart, 
    }), [ cart ])

return (
    <CartContext.Provider value = {memoizedValue}>
        {children}
    </CartContext.Provider>
)
}; 



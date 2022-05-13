import React, {useState, createContext, useEffect} from "react";
const Context=createContext();

const CardProviderWrapper = ({children}) => {
    const [CartItem, setCartItem] = useState([])
    useEffect( ()=>{
         const itemsCart= localStorage.getItem("CartItem");
        if (itemsCart){
             setCartItem(JSON.parse(itemsCart));
        }
    },
        // eslint-disable-next-line
        [])
    useEffect( ()=>{
            localStorage.setItem("CartItem",JSON.stringify(CartItem))
    },
        // eslint-disable-next-line
        [CartItem])
    const addToCart =async (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)
        if (productExit) {
            await setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? { ...productExit, qty: productExit.qty + 1 } : item)))
            await localStorage.setItem("CartItem",JSON.stringify(CartItem))

        } else {
           await setCartItem([...CartItem, { ...product, qty: 1 }])
           await localStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }

    const decreaseQty = async (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit.qty === 1) {
            await setCartItem(CartItem.filter((item) => item.id_produits !== product.id_produits))
            await localStorage.setItem("CartItem",JSON.stringify(CartItem))
        } else {
            await setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? { ...productExit, qty: productExit.qty - 1 } : item)))
            await localStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }

    const deleteProduct = async (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit) {
           await setCartItem(CartItem.filter((item) => item.id_produits !== product.id_produits))
            await localStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }


    return (
        <Context.Provider value={{addToCart,CartItem,decreaseQty,deleteProduct}}>
            {children}
        </Context.Provider>
    )

}
export {CardProviderWrapper, Context as CardContext}
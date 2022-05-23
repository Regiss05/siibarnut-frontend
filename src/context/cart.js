import React, {useState, createContext, useEffect} from "react";
//import {toast} from "react-toastify";
const Context=createContext();

const CardProviderWrapper = ({children}) => {
    const [CartItem, setCartItem] = useState([])
    const [favoriItem, setfavoriItem] = useState([])
    useEffect( ()=>{
         const itemsCart= localStorage.getItem("CartItem");
        if (itemsCart){
             setCartItem(JSON.parse(itemsCart));
        }
    },
        // eslint-disable-next-line
        [])
    useEffect( ()=>{
         const favirit= localStorage.getItem("favoriItem");
        if (favirit){
            setfavoriItem(JSON.parse(favirit));
        }
    },
        // eslint-disable-next-line
        [])

    useEffect( ()=>{
            localStorage.setItem("CartItem",JSON.stringify(CartItem))
    },
        // eslint-disable-next-line
        [CartItem])

    useEffect( ()=>{
            localStorage.setItem("favoriItem",JSON.stringify(favoriItem))
    },
        // eslint-disable-next-line
        [favoriItem])
    const addToCart = (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)
        if (productExit) {
            if (parseInt(product.quantites) === parseInt(productExit.qty)){
            }else {
                 setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? {
                    ...productExit,
                    qty: productExit.qty + 1
                } : item)))
                 localStorage.setItem("CartItem", JSON.stringify(CartItem))
            }

        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }])
            localStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }
    const ToggleFavorit = (product) => {
        const productExit = favoriItem.find((item) => item.id_produits === product.id_produits)
        if (productExit) {
             setfavoriItem(favoriItem.filter((item) => item.id_produits !== product.id_produits))
                 localStorage.setItem("favoriItem", JSON.stringify(favoriItem))

        } else {
            setfavoriItem([...favoriItem, { ...product }])
            localStorage.setItem("favoriItem",JSON.stringify(favoriItem))
        }
    }

    const decreaseQty =  (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit.qty === 1) {
             setCartItem(CartItem.filter((item) => item.id_produits !== product.id_produits))
             localStorage.setItem("CartItem",JSON.stringify(CartItem))
        } else {
             setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? { ...productExit, qty: productExit.qty - 1 } : item)))
             localStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }

    const VerifIfIsExixte =  (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)
        if (productExit) {
            return productExit
        }
    }

    const VerifIfIsExixteFavori = (product) => {
        const productExit = favoriItem.find((item) => item.id_produits === product.id_produits)

        if (productExit) {
            return productExit
        }
    }

    const deleteProduct =  (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit) {
            setCartItem(CartItem.filter((item) => item.id_produits !== product.id_produits))
             localStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }


    return (
        <Context.Provider value={{addToCart,CartItem,decreaseQty,deleteProduct,VerifIfIsExixte,ToggleFavorit,VerifIfIsExixteFavori}}>
            {children}
        </Context.Provider>
    )

}
export {CardProviderWrapper, Context as CardContext}
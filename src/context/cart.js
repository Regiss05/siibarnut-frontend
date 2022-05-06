import React, {useState, createContext} from "react";
import {toast} from "react-toastify";
const Context=createContext();

const CardProviderWrapper = ({children}) => {
    const [CartItem, setCartItem] = useState([])
    const addToCart = (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)
        if (productExit) {
            setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? { ...productExit, qty: productExit.qty + 1 } : item)))
            toast.success("Produit ajouter au panier", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }])
            toast.success("Produit ajouter au panier", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const decreaseQty = (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id_produits !== product.id_produits))
        } else {
            setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? { ...productExit, qty: productExit.qty - 1 } : item)))
        }
    }


    return (
        <Context.Provider value={{addToCart,CartItem,decreaseQty}}>
            {children}
        </Context.Provider>
    )

}
export {CardProviderWrapper, Context as CardContext}
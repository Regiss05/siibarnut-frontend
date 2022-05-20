import React, {useState, createContext, useEffect} from "react";
import {toast} from "react-toastify";
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
    const addToCart =async (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)
        if (productExit) {
            if (parseInt(product.quantites) === parseInt(productExit.qty)){
                toast.warning("Le produit est déjà sur la limite du stock", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }else {
                await setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? {
                    ...productExit,
                    qty: productExit.qty + 1
                } : item)))
                await localStorage.setItem("CartItem", JSON.stringify(CartItem))
                toast.success("Produt ajouter au panier", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        } else {
           await setCartItem([...CartItem, { ...product, qty: 1 }])
           await localStorage.setItem("CartItem",JSON.stringify(CartItem))
            toast.success("Produt ajouter au panier", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const ToggleFavorit =async (product) => {
        const productExit = favoriItem.find((item) => item.id_produits === product.id_produits)
        if (productExit) {
            await setfavoriItem(favoriItem.filter((item) => item.id_produits !== product.id_produits))
                await localStorage.setItem("favoriItem", JSON.stringify(favoriItem))
            toast.error("Produit supprimer au favori", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } else {
           await setfavoriItem([...favoriItem, { ...product }])
           await localStorage.setItem("favoriItem",JSON.stringify(favoriItem))
            toast.success("Produit ajouter au favori", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const decreaseQty = async (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit.qty === 1) {
            await setCartItem(CartItem.filter((item) => item.id_produits !== product.id_produits))
            await localStorage.setItem("CartItem",JSON.stringify(CartItem))
            toast.error("Produit supprimer au panier", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            await setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? { ...productExit, qty: productExit.qty - 1 } : item)))
            await localStorage.setItem("CartItem",JSON.stringify(CartItem))
            toast.warning("Produt diminuer au panier", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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

    const deleteProduct = async (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit) {
           await setCartItem(CartItem.filter((item) => item.id_produits !== product.id_produits))
            await localStorage.setItem("CartItem",JSON.stringify(CartItem))
            toast.error("Produit supprimer au panier", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }


    return (
        <Context.Provider value={{addToCart,CartItem,decreaseQty,deleteProduct,VerifIfIsExixte,ToggleFavorit,VerifIfIsExixteFavori}}>
            {children}
        </Context.Provider>
    )

}
export {CardProviderWrapper, Context as CardContext}
import React, {useState, createContext, useEffect} from "react";
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
            if (parseInt(product.quantites) === parseInt(product.qty)){

            }else {
                await setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? {
                    ...productExit,
                    qty: productExit.qty + 1
                } : item)))
                await localStorage.setItem("CartItem", JSON.stringify(CartItem))
            }

        } else {
           await setCartItem([...CartItem, { ...product, qty: 1 }])
           await localStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }
    const ToggleFavorit =async (product) => {
        const productExit = favoriItem.find((item) => item.id_produits === product.id_produits)
        if (productExit) {
            await setfavoriItem(favoriItem.filter((item) => item.id_produits !== product.id_produits))
                await localStorage.setItem("favoriItem", JSON.stringify(favoriItem))

        } else {
           await setfavoriItem([...favoriItem, { ...product }])
           await localStorage.setItem("favoriItem",JSON.stringify(favoriItem))
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

    const VerifIfIsExixte = async (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit) {
           return true
        } else {
           return false
        }
    }

    const VerifIfIsExixteFavori = async (product) => {
        const productExit = favoriItem.find((item) => item.id_produits === product.id_produits)

        if (productExit) {
           return true
        } else {
           return false
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
        <Context.Provider value={{addToCart,CartItem,decreaseQty,deleteProduct,VerifIfIsExixte,ToggleFavorit,VerifIfIsExixteFavori}}>
            {children}
        </Context.Provider>
    )

}
export {CardProviderWrapper, Context as CardContext}
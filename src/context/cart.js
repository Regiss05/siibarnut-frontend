import React, {useState, createContext, useEffect, useContext} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {AuthContext} from "./auth";
//import {toast} from "react-toastify";
const Context=createContext();

const CardProviderWrapper = ({children}) => {
    const [CartItem, setCartItem] = useState([])
    const [isLogFav, setisLogFav] = useState(false)
    const [favoriItem, setfavoriItem] = useState([])
    const {isLogin}=useContext(AuthContext);

    const getFavoritProd=async()=>{

            let user=await sessionStorage.getItem("Id_user");
            //setUser(JSON.parse(user))
        setisLogFav(true)
        if (user){

            const options = {
                url: process.env.REACT_APP_BASE_URL + "/product?user="+user ,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            };
            await axios(options)
                .then(response => {
                    setisLogFav(false)
                    if (response.data.status===200){
                        setisLogFav(false)
                        //console.log("favorit",response.data)
                        setfavoriItem(response.data?.data);
                    }else {
                        setisLogFav(false)
                        setfavoriItem([])
                    }
                })
                .catch(err => {
                    setisLogFav(false)
                    //console.log(err.response);
                    setfavoriItem([])
                });
        }
    }
    useEffect( ()=>{
         const itemsCart= sessionStorage.getItem("CartItem");
        if (itemsCart){
             setCartItem(JSON.parse(itemsCart));
        }
    },
        // eslint-disable-next-line
        [])
    useEffect( ()=>{
            async function fetchData() {
                // You can await here
                await getFavoritProd()
                // ...
            }
            fetchData().then(r => {})
    },
        // eslint-disable-next-line
        [])
    useEffect( ()=>{
            async function fetchData() {
                // You can await here
                await getFavoritProd()
                // ...
            }
            fetchData().then(r => {})
    },
        // eslint-disable-next-line
        [isLogin])

    useEffect( ()=>{
            sessionStorage.setItem("CartItem",JSON.stringify(CartItem))
    },
        // eslint-disable-next-line
        [CartItem])

    useEffect( ()=>{
            sessionStorage.setItem("favoriItem",JSON.stringify(favoriItem))
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
                sessionStorage.setItem("CartItem", JSON.stringify(CartItem))
            }

        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }])
            sessionStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }
    const ToggleFavorit = async (product) => {
            //setUser(JSON.parse(user))
        let user=await localStorage.getItem("Id_user");
        //setUser(JSON.parse(user))
        if (user){
            const options = {
                url: process.env.REACT_APP_BASE_URL + "/like/add" ,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                data:{
                    "user":user,
                    "product":product.id_produits
                }
            };
            await axios(options)
                .then(response => {
                    if (response.data.status===200){
                        //console.log("favorit",response.data)
                        setfavoriItem(response.data?.data);
                    }else {
                    }
                })
                .catch(err => {


                    //console.log(err.response);
                });
        }else {
            toast.error('Vous etes pas connecté', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const decreaseQty =  (product) => {
        const productExit = CartItem.find((item) => item.id_produits === product.id_produits)

        if (productExit.qty === 1) {
             setCartItem(CartItem.filter((item) => item.id_produits !== product.id_produits))
            sessionStorage.setItem("CartItem",JSON.stringify(CartItem))
        } else {
             setCartItem(CartItem.map((item) => (item.id_produits === product.id_produits ? { ...productExit, qty: productExit.qty - 1 } : item)))
            sessionStorage.setItem("CartItem",JSON.stringify(CartItem))
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
            sessionStorage.setItem("CartItem",JSON.stringify(CartItem))
        }
    }
    const deleteAll =  () => {
        setCartItem([])
        sessionStorage.setItem("CartItem",JSON.stringify(CartItem))
    }


    return (
        <Context.Provider value={{
            addToCart,
            CartItem,
            decreaseQty,
            deleteProduct,
            VerifIfIsExixte,
            ToggleFavorit,
            VerifIfIsExixteFavori,
            getFavoritProd,
            favoriItem,
            isLogFav,
            deleteAll
        }}>
            {children}
        </Context.Provider>
    )

}
export {CardProviderWrapper, Context as CardContext}
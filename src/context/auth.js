import React, {useState, createContext, useEffect} from "react";
import {toast} from "react-toastify";
import axios from "axios";
const Context=createContext();

const AuthProviderWrapper = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isopenModalAut, setIsOpenModalAuth] = useState(true);
    const [isLoaderUser, setIsLoaderUser] = useState(false);
    const login = (phone,password) => {
        if (phone && password){
            const dataState={
                "PHONE":"+243972673616",
                "PASSWORD":"123456",
                "iss":"weblocal"
            }
            setIsLoaderUser(true)
            console.log(dataState)
            const options = {
                url:"http://localhost/muda-backend/user/login" ,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                data:{
                    "PHONE":"243972673616",
                    "PASSWORD":"123456",
                    "iss":"weblocal"
                }
            };
            axios(options)
                .then(response => {
                    setIsLoaderUser(false)
                        console.log(response.data)

                })
                .catch(err => {
                    setIsLoaderUser(false)
                    console.log(err.response);
                    toast.error('Problème de connexion', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        }else {
            toast.error('Remplisez tout le champs', {
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
    const closeModalAuth=()=>{
        setIsOpenModalAuth(false)
    }
    const openModalAuth=()=>{
        setIsOpenModalAuth(true)
    }
    useEffect(()=>{
        if (localStorage.getItem("TokenUser")){
            setIsLogin(true);
        }
    },[])
    return (
        <Context.Provider value={{login,isLogin,isLoaderUser,isopenModalAut,closeModalAuth,openModalAuth}}>
            {children}
        </Context.Provider>
    )

}
export {AuthProviderWrapper, Context as AuthContext}
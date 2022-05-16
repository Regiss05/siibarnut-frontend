import React, {useState, createContext, useEffect} from "react";
import {toast} from "react-toastify";
import axios from "axios";
const Context=createContext();

const AuthProviderWrapper = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [isopenModalAut, setIsOpenModalAuth] = useState(false);
    const [isLoaderUser, setIsLoaderUser] = useState(false);
    const logout=()=>{
        localStorage.removeItem("TokenUser")
        localStorage.removeItem("userData")
        setUserToken(null)
        setUserData(null)
        setIsLogin(false)
    }
    const login = (phone,password) => {
        if (phone && password){
            const dataState={
                "PHONE":phone.replaceAll(" ",""),
                "PASSWORD":password,
                "iss":"weblocal"
            }
            setIsLoaderUser(true)
            console.log(dataState)
            const options = {
                url:process.env.REACT_APP_BASE_URL +"/user/login" ,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                data:dataState
            };
            axios(options)
                .then(response => {
                    setIsLoaderUser(false)
                    if (response.data.status===200){
                        console.log(response.data)
                        setUserData(response.data.data.user)
                        setUserToken(response.data.data.Token)
                        localStorage.setItem("TokenUser",response.data.data.Token)
                        localStorage.setItem("userData",JSON.stringify(response.data.data.user))
                        closeModalAuth()
                        setIsLogin(true)
                        toast.success(response?.data?.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    }else {
                        toast.error(response?.data?.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }

                })
                .catch(err => {
                    setIsLoaderUser(false)
                    console.log(err.response.data);
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
    const sinUp = (Nom_complet,phone,password,confPassword) => {
        if (phone && password && Nom_complet && confPassword){
            const dataState={
                "Nom_complet": Nom_complet,
                "Phone":phone.replaceAll(" ",""),
                "Email":"email",
                "Sexe":"M",
                "Password":password,
                "confPassword":confPassword,
                "iss":"web"
            }
            setIsLoaderUser(true)
            console.log(dataState)
            const options = {
                url:process.env.REACT_APP_BASE_URL +"/user/add" ,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                data:dataState
            };
            axios(options)
                .then(response => {
                    setIsLoaderUser(false)
                    if (response.data.status===201){
                        console.log(response.data)
                        setUserData(response.data.data.user)
                        setUserToken(response.data.data.Token)
                        localStorage.setItem("TokenUser",response.data.data.Token)
                        localStorage.setItem("userData",JSON.stringify(response.data.data.user))
                        closeModalAuth()
                        setIsLogin(true)
                        toast.success(response?.data?.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    }else {
                        toast.error(response?.data?.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }

                })
                .catch(err => {
                    setIsLoaderUser(false)
                    console.log(err.response.data);
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
        if (localStorage.getItem("TokenUser") && localStorage.getItem("userData")){
            setIsLogin(true);
            setUserToken(localStorage.getItem("TokenUser"))
            setUserData(JSON.parse(localStorage.getItem("userData")))
        }
    },[])
    return (
        <Context.Provider value={{login,isLogin,isLoaderUser,isopenModalAut,closeModalAuth,openModalAuth,userToken,userData,logout,sinUp}}>
            {children}
        </Context.Provider>
    )

}
export {AuthProviderWrapper, Context as AuthContext}
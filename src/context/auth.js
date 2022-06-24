import React, {useState, createContext, useEffect, useContext} from "react";
import {toast} from "react-toastify";
import axios from "axios";
const Context=createContext();

const AuthProviderWrapper = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [isopenModalAut, setIsOpenModalAuth] = useState(false);
    const [isLoaderUser, setIsLoaderUser] = useState(false);
    const [isSendOpt, setIsSendOpt] = useState(false);
    const [isSetpass, setIsSetpass] = useState(false);
    const [userDataConfirm, setUserDataConfirm] = useState(null);
    const [values, setValues] = React.useState(['', '', '','']);
    const logout=()=>{
        localStorage.removeItem("TokenUser")
        localStorage.removeItem("userData")
        localStorage.removeItem("Id_user")
        setUserToken(null)
        setUserData(null)
        setIsLogin(false)

        toast.success('Deconnexion avec success', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
                        localStorage.setItem("Id_user",response.data.data.user.Id_user)
                        closeModalAuth()
                        setIsLogin(true)
                        toast.success(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    }else {
                        toast.error(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
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
                        autoClose: 1000,
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
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const confirmOpt = (OPT) => {
        if (OPT){

            const token =localStorage.getItem("token");
            const dataState={
                "PHONE":localStorage.getItem("PHONE"),
                "OPT":OPT.toString().replaceAll(",",""),
                "iss":"weblocal"
            }
            setIsLoaderUser(true)
            console.log(dataState)
            const options = {
                url:process.env.REACT_APP_BASE_URL +"/user/opt/send" ,
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Authorization":token
                },
                data:dataState
            };
            axios(options)
                .then(response => {
                    setValues(['', '', '',''])
                    setIsLoaderUser(false)
                    if (response.data.status===201){
                        setUserDataConfirm(response.data.data.user)
                        setUserToken(response.data.data.Token)
                        localStorage.setItem("TokenUser","Bearer " +response.data.data.Token)
                        localStorage.setItem("userDataConfirm",JSON.stringify(response.data.data.user))


                        toast.success(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    }else {
                        toast.error(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
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
                    setValues(['', '', '',''])
                    console.log(err.response.data);
                    toast.error('Problème de connexion', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        }else {
            setValues(['', '', '',''])
        }
    }

    const getOpt = (phone) => {
        if (phone ){
            setIsLoaderUser(true)
            const options = {
                url:process.env.REACT_APP_BASE_URL +"/user/opt/get?phone="+phone.replaceAll(" ","")+"&iss=weblocal" ,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            };
            axios(options)
                .then(response => {
                    setIsLoaderUser(false)
                    if (response.data.status===201){
                        localStorage.setItem("PHONE",response.data.data.PHONE)
                        localStorage.setItem("token", "Bearer " + response.data.data.token)
                        setIsSendOpt(true)
                        toast.success(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    }else {
                        toast.error(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
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
                        autoClose: 1000,
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
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const getOptNew = () => {
            setIsLoaderUser(true)
            const options = {
                url:process.env.REACT_APP_BASE_URL +"/user/opt/get?phone="+localStorage.getItem("PHONE")+"&iss=weblocal" ,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            };
            axios(options)
                .then(response => {
                    setIsLoaderUser(false)
                    if (response.data.status===201){
                        localStorage.setItem("PHONE",response.data.data.PHONE)
                        localStorage.setItem("token", "Bearer " + response.data.data.token)
                        setIsSendOpt(true)
                        toast.success(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    }else {
                        toast.error(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
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
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });

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
                        localStorage.setItem("Id_user",response.data.data.user.Id_user)
                        closeModalAuth()
                        setIsLogin(true)
                        toast.success(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    }else {
                        toast.error(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
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
                        autoClose: 1000,
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
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const changePass = (newPassword,confNewPassword) => {
        if (newPassword && confNewPassword ){
            const dataState={
                "newPassword":newPassword,
                "confNewPassword": confNewPassword
            }
            setIsLoaderUser(true)
            console.log(dataState)
            const token =localStorage.getItem("TokenUser");
            const options = {
                url:process.env.REACT_APP_BASE_URL +"/user/"+userDataConfirm.Id_user+"/password" ,
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Authorization":token
                },
                data:dataState
            };
            axios(options)
                .then(response => {
                    setIsLoaderUser(false)
                    if (response.data.status===201){
                        console.log(response.data)
                        toast.success(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setIsSetpass(true)

                    }else {
                        toast.error(response?.data?.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setIsSetpass(false)
                    }

                })
                .catch(err => {
                    setIsLoaderUser(false)
                    console.log(err.response.data);
                    toast.error('Problème de connexion', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setIsSetpass(false)
                });
        }else {
            toast.error('Remplisez tout le champs', {
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
        <Context.Provider value={{login,
            isLogin,
            isLoaderUser,
            isopenModalAut,
            closeModalAuth,
            openModalAuth,
            userToken,
            userData,
            setUserData,
            logout,
            sinUp,
            getOpt,
            isSendOpt,
            confirmOpt,
            userDataConfirm,
            values,
            setValues,
            getOptNew,
            changePass,
            isSetpass
        }}>
            {children}
        </Context.Provider>
    )

}
export {AuthProviderWrapper, Context as AuthContext}
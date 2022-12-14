import React, {useContext, useEffect, useState} from "react";
import { ChevronDown, LogOut, Menu, ShoppingCart, User} from "react-feather";
import {Link, useNavigate} from "react-router-dom";
import {Offcanvas, OffcanvasBody, OffcanvasHeader} from "reactstrap";
import {Arrow, useLayer} from "react-laag";
import {AnimatePresence,motion} from "framer-motion/dist/framer-motion";
import {AuthContext} from "../../context/auth";
import {CardContext} from "../../context/cart";
import profImg from "../../images/ulistartion/6.png";
import axios from "axios";
import {toast} from "react-toastify";
import ProductLoader from "../elements/productLoader";
import Collapsible from 'react-collapsible';

const TopHeaderMobile=()=>{
    const [openMenu,setOpenMenu]=useState(false)
    const [isOpen, setOpen] = React.useState(false);
    const history = useNavigate();
    function close() {
        setOpen(false);
    }
    const {isLogin,logout,openModalAuth,userData}=useContext(AuthContext);
    const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
        isOpen,
        onOutsideClick: close,
        onDisappear: close,
        overflowContainer: true,
        auto: true,
        placement: "bottom-start",
        triggerOffset: 12,
        containerOffset: 16,
        arrowOffset: 16 ,
    });
    const {CartItem}=useContext(CardContext);
    const [data,setData]=useState(null)
    const [isLog, setislog] = useState(false);
    const getcategorie=()=>{
        setislog(true)
        console.log("get")
        const options = {
            url: process.env.REACT_APP_BASE_URL + "/categories" ,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        };
        axios(options)
            .then(response => {
                setislog(false)
                if (response.data.status===200){
                    console.log(response.data)
                    setData(response.data?.data);
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
                setislog(false)
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
    }
    useEffect(()=>{
        getcategorie();
    },[])

 const getCatByparant=(parent)=>{
        if (parent){
            return data.filter((item) => item.id_parent ===parent)
        }else return null;
 }


    return(
        <React.Fragment>
        <div className="row col-12">
            <div className="col-2">
                <button className="btn-manu" onClick={()=>setOpenMenu(true)}>
                    <Menu color="#fff"/>
                </button>
            </div>
                <div className="col-10  d-flex justify-content-end ">
                    <Link to="/" className="btnlink" {...triggerProps} onClick={e => {
                        e.preventDefault()
                        setOpen(!isOpen)
                    }}>
                        {isLogin
                            ?
                            <img src={userData.profil?process.env.REACT_APP_BASE_URL+"/img/"+userData.profil:profImg}
                                 onError={e => {
                                     e.target.src = profImg
                                 }}
                                 className="imgProf"/>
                            :
                            <User color="#000"/>
                        }
                        <span className="status"/>
                    </Link>
                    {renderLayer(
                        <AnimatePresence>
                            {isOpen && (
                                <motion.ul {...layerProps} className="menulist">
                                    {isLogin
                                        ?

                                        <>
                                            <li>
                                                <button className="logout  btn-sm   btn" onClick={logout}><LogOut className="iconlog" size={18}/><span>Déconnexion</span></button>
                                            </li>
                                            <li>
                                                <Link  to="/profil" className="logout  btn-sm   btn"><User className="iconlog" size={18}/><span>Profil</span></Link>
                                            </li>
                                        </>
                                        :
                                        <li>
                                            <button className="logout  btn-sm   btn" onClick={openModalAuth}><LogOut className="iconlog" size={18}/><span>Connexion</span></button>
                                        </li>
                                    }
                                    <hr/>
                                    <ul style={{marginLeft:-10}}>
                                    </ul>
                                    <Arrow {...arrowProps} />
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    )}
                    <Link to="/card" className="btnlink"><ShoppingCart color="#fff"/><span className="countItemCard">{CartItem.length === 0 ? "0" : CartItem.length}</span></Link>
                </div>
        </div>
            <Offcanvas toggle={()=>setOpenMenu(false)} isOpen={openMenu}>
                <OffcanvasHeader toggle={()=>setOpenMenu(false)}/>
                <OffcanvasBody>
                   <div className=" d-flex justify-content-start  flex-column">

                           {
                               isLog
                                   ?
                                   <div className="row">
                                       <ProductLoader/>
                                   </div>
                                   :
                                   data
                                       ?
                                       data.filter((item) => item.Type_du_categorie ==="1").map((item, index) => <Collapsible trigger={<div className="collapsItem col-12">
                                           <span>{item.designation}</span><ChevronDown/>
                                           </div>} key={index} >
                                           <div className="chilCollaps">
                                               {
                                                   getCatByparant(item.id_cat)
                                                       ?
                                                       getCatByparant(item.id_cat).map((itemChildren, indexChildren) => <Collapsible trigger={<div className="collapsItem2 col-12">
                                                               <span>{itemChildren.designation}</span><ChevronDown/>
                                                           </div>} key={indexChildren} >
                                                               <p>
                                                                   This is the collapsible content. It can be any element or React
                                                                   component you like.
                                                               </p>
                                                           </Collapsible>
                                                       )
                                                       :
                                                       null
                                               }
                                           </div>

                                           </Collapsible>
                                       )
                                       :
                                       null}

                   </div>

                </OffcanvasBody>
            </Offcanvas>
        </React.Fragment>
    )
}
export default TopHeaderMobile;
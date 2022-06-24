import React, {useContext, useState} from "react";
import {ArrowRight, LogOut, Menu, ShoppingCart, User} from "react-feather";
import {Link, useNavigate} from "react-router-dom";
import {Offcanvas, OffcanvasBody, OffcanvasHeader} from "reactstrap";
import logoImage from "../../images/logos/3.PNG"
import {Arrow, useLayer} from "react-laag";
import {AnimatePresence,motion} from "framer-motion/dist/framer-motion";
import {AuthContext} from "../../context/auth";
import {CardContext} from "../../context/cart";
import profImg from "../../images/ulistartion/6.png";
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
                   <div className="col-12 d-flex justify-content-center align-items-center">
                       <img src={logoImage} alt="logoimg" className="logoManu"/>
                   </div>
                   <div className="col-12 d-flex justify-content-start align-items-center flex-column">
                       <button  className="menuMobilItem col-12 d-flex justify-content-between mt-1"  onClick={()=> {
                           setOpenMenu(false)
                           history("/")
                       }}>Accueil <ArrowRight color="#000"/></button>
                       <button  className="menuMobilItem col-12 d-flex justify-content-between mt-1" onClick={()=> {
                           setOpenMenu(false)
                           history("/produits")
                       }}>Produits <ArrowRight color="#000"/></button>
                       <button  className="menuMobilItem col-12 d-flex justify-content-between mt-1" onClick={()=> {
                           setOpenMenu(false)
                           history("/apropos")
                       }}>A propos de nous  <ArrowRight color="#000"/></button>
                   </div>

                </OffcanvasBody>
            </Offcanvas>
        </React.Fragment>
    )
}
export default TopHeaderMobile;
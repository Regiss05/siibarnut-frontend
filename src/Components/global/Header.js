import React, {useContext, useEffect, useState} from 'react';
import '../../Styles/Header.css';
import { Search } from '@material-ui/icons';
import logo from "../../images/logos/3.PNG"
import {Link} from "react-router-dom";
import TopHeaderMobile from "./topHeaderMobile";
import {LogOut, ShoppingCart, User} from "react-feather";
import {Arrow, useLayer} from "react-laag";
import {AnimatePresence,motion} from "framer-motion/dist/framer-motion";
import {AuthContext} from "../../context/auth";
import AuthModal from "../elements/AuthModal";

function Header() {

  const [isScroll, setIsScroll] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 30 ? setIsScroll(true) : setIsScroll(false);

  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  function close() {
    setOpen(false);
  }
  const {isLogin}=useContext(AuthContext);
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
  return (
      <React.Fragment>
        <AuthModal/>
       <div className="headerTop">
          <div className="container align-items-center d-flex justify-content-between gap-2">

            <div className="col-12 pt-2 d-none d-xl-flex d-lg-flex align-items-center justify-content-xl-end gap-xl-5 justify-content-lg-end gap-lg-5 justify-content-between">
              <Link to="/" className="linkItems">Accueil</Link>
              <Link to="/produits" className="linkItems">Produits </Link>
              <Link to="/" className="linkItems">A propos de nous</Link>
            </div>
            <div className="d-block d-lg-none d-xl-none col-12">
              <TopHeaderMobile/>
            </div>
          </div>

        </div>
    <div className={isScroll ? "header-light" : "header"}>
    <div className="headerContainer container col-12">
      <div className="logo col-2 col-lg-1 col-xl-1 ">
        <img className="logo "
             src={logo} alt=""  />
      </div>

      <div className="headerLeft col-10 col-lg-8 col-xl-8">
        <div className="headerSearch col-12">
          <Search/>
          <input className="inputContainer col-11" placeholder="Search " />
        </div>
      </div>

      <div className="headerRight d-none d-xl-flex d-lg-flex col-3">
        <div className="col-10  d-flex justify-content-end ">
          <Link to="/" className="btnlink"  {...triggerProps} onClick={e => {
            e.preventDefault()
            setOpen(!isOpen)
          }}><User color="#000"/><span className="status"/></Link>

          {renderLayer(
              <AnimatePresence>
                {isOpen && (
                    <motion.ul {...layerProps} className="menulist">
                      {isLogin
                          ?
                        <li>
                        <button className="logout  btn-sm   btn" onClick={null}><LogOut className="iconlog" size={18}/><span>Déconnexion</span></button>
                      </li>
                          :
                        <li>
                        <button className="logout  btn-sm   btn" onClick={null}><LogOut className="iconlog" size={18}/><span>Connexion</span></button>
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
          <Link to="/" className="btnlink"><ShoppingCart color="#000"/><span className="countItemCard">0</span></Link>
        </div>
      </div>
    </div>
    </div>
        </React.Fragment>
  )
}

export default Header

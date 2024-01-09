import React, {useContext, useEffect, useState} from 'react';
import '../../Styles/Header.css';
import { Search } from '@material-ui/icons';
// import logo from "../../images/logos/3.PNG"
import {Link, useNavigate} from "react-router-dom";
import TopHeaderMobile from "./topHeaderMobile";
import {LogOut, ShoppingCart, User} from "react-feather";
import {Arrow, useLayer} from "react-laag";
import {AnimatePresence,motion} from "framer-motion/dist/framer-motion";
import {AuthContext} from "../../context/auth";
import AuthModal from "../elements/AuthModal";
import axios from "axios";
import {toast} from "react-toastify";
import ContentLoader from "react-content-loader";
import {CardContext} from "../../context/cart";
import profImg from "../../images/ulistartion/6.png"
function Header() {
  const [produits,setProducts]=useState(null)
  const [isLog, setislog] = useState(false);
  const getProducts=(searchtext)=>{
    setislog(true)
    console.log("search",searchtext)
    // eslint-disable-next-line
      const options = {
        url: process.env.REACT_APP_BASE_URL + "/product/search",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          "text": searchtext
        }
      };
      axios(options)
          .then(response => {
            setislog(false)
            if (response.data.status === 200) {
              console.log(response.data)
              setProducts(response.data?.data);
            } else {
              setProducts(null)
            }
          })
          .catch(err => {
            setislog(false)
            console.log(err.response);
            if (err.response) {
              if (err.response.data.status === 404) {
                console.log(err.response.data)
                setProducts(null)
                toast.error(err?.response?.data?.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                toast.error(err?.response?.data?.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                setProducts(null)
              }
            } else {

              toast.error('Problème de connexion', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setProducts(null)
            }
          });


  }
  const history = useNavigate();
  const Items=({data})=>{
    return(
        <div className="col-12 search-items d-flex mb-1" onClick={() => {
          history( "/produit", {state: data})
          setProducts(null)
        }}>
          <div className="imagecont col-2">
            <img src={process.env.REACT_APP_BASE_URL+"/img/"+data.img_princ} alt={"imagep"} className="img-fluid" />
          </div>
          <div className="prodsearchtitle col-10">
            <h5>{data.designation}</h5>
            <p>{data.Courte_Description.substring(0,80)}...</p>
          </div>
        </div>
    )
  }

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
  const {isLogin,logout,openModalAuth,userData}=useContext(AuthContext);
  const {CartItem}=useContext(CardContext);
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
        <div className={isScroll ? "header-light" : ""}>
       <div className="headerTop" >
          <div className="container align-items-center d-flex justify-content-between gap-2">

            <div className="col-12 pt-2 d-none d-xl-flex d-lg-flex align-items-center justify-content-xl-end gap-xl-5 justify-content-lg-end gap-lg-5 justify-content-between">
              <Link to="/" className="linkItems">Accueil</Link>
              <Link to="/produits" className="linkItems">Produits </Link>
              <Link to="/apropos" className="linkItems">A propos de nous</Link>
            </div>
            <div className="d-block d-lg-none d-xl-none col-12">
              <TopHeaderMobile/>
            </div>
          </div>

        </div>
    <div className={"header"}>
    <div className="headerContainer container col-12">
      {/* <div className="logo col-2 col-lg-1 col-xl-1 ">
        <img className="logo "
             src={logo} alt=""  />
      </div> */}

      <div className="headerLeft col-10 col-lg-8 col-xl-8">
        <div className="col-12 d-flex flex-column">
        <div className="headerSearch col-12">
          <Search/>
          <input className="inputContainer col-11" placeholder="Search " onChange={e=>{
            // eslint-disable-next-line

              getProducts(e.target.value)

              console.log("searchtextLL",e.target.value)
          }} />
        </div>
          {isLog
              ?
                <div className=" search-cont-items ">
                  <div className="row col-12">
                    <div className="col-12  ">
                      <div className="loaderCustom2">
                        <ContentLoader
                            speed={2}
                            viewBox="0 0 600 100"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            className=""
                        >
                          <rect x="0" y="20" rx="2" ry="2" width="100%" height="50" />
                        </ContentLoader>
                      </div>
                    </div>
                  </div>
                </div>
                :
               produits !== null
              ?
            <div className=" search-cont-items ">
            <div className="row col-12">
              {
                produits.map((item,index)=><Items key={index} data={item} />)
              }
            </div>
            </div>
                   :
                   null

          }
        </div>

      </div>

      <div className="headerRight d-none d-xl-flex d-lg-flex col-3">
        <div className="col-10  d-flex justify-content-end ">
          <Link to="/" className="btnlink"  {...triggerProps} onClick={e => {
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
          <Link to="/card" className="btnlink"><ShoppingCart color="#000"/><span className="countItemCard">{CartItem.length === 0 ? "0" : CartItem.length}</span></Link>
        </div>
      </div>
    </div>
    </div>
        </div>
        </React.Fragment>
  )
}

export default Header

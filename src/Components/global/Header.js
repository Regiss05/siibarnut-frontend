import React, {useEffect, useState} from 'react';
import '../../Styles/Header.css';
import { Search } from '@material-ui/icons';
import HeaderOptionLeft from './HeaderOptionLeft';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from "../../images/logos/3.PNG"
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
  return (
      <React.Fragment>
   {/*     <div className="headerTop">
          <div className="container align-items-center d-flex justify-content-between gap-2">
            <UncontrolledDropdown className="col-5" >
              <DropdownToggle
                  tag="button"
                  className="btn-cat col-12"
              >
                <Menu size={20}/> Categories
              </DropdownToggle>
              <DropdownMenu className="col-12 menu content">
                <div onClick={function noRefCheck(){}}>
                  Custom dropdown item
                </div>
                <div onClick={function noRefCheck(){}}>
                  Custom dropdown item
                </div>
                <div onClick={function noRefCheck(){}}>
                  Custom dropdown item
                </div>
                <div onClick={function noRefCheck(){}}>
                  Custom dropdown item
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="col-4 d-flex align-items-center justify-content-between">
              <Link to="/" className="linkItems">Accueil</Link>
              <Link to="/" className="linkItems">Shop </Link>
              <Link to="/" className="linkItems">A propos de nous</Link>
            </div>
          </div>
        </div>*/}
    <div className={isScroll ? "header-light" : "header"}>
    <div className="headerContainer container col-12">
      <di className="logo col-2 col-lg-1 col-xl-1 ">
        <img className="logo "
             src={logo} alt=""  />
      </di>

      <div className="headerLeft col-10 col-lg-8 col-xl-8">
        <div className="headerSearch col-12">
          <Search/>
          <input className="inputContainer col-11" placeholder="Search " />
        </div>
      </div>

      <div className="headerRight d-none d-xl-flex d-lg-flex col-3">
        <HeaderOptionLeft Icon={PersonOutlineIcon} title="Login" DropIcon={ExpandMoreIcon} />
        <HeaderOptionLeft Icon={ShoppingCartIcon} title="Cart" />
      </div>
    </div>
    </div>
        </React.Fragment>
  )
}

export default Header

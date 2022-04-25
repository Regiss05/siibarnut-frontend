import React,{useState} from 'react';
import '../../../Styles/LeftTop.css';
import LeftTopOption from './LeftTopOption';
import Supermarket from '../../../images/supermarket.png';
import Home from '../../../images/home.png';
import Phone from '../../../images/phones.png';
import Computing from '../../../images/computing.png';
import Electronics from '../../../images/tv.png';
import Shirt from '../../../images/shit.png';
import Gaming from '../../../images/gaming.png';
import {Menu} from "react-feather";
import {Dropdown, DropdownMenu, DropdownToggle} from "reactstrap";


function LeftTop() {
  const [openCategori, setOpenCategori] = useState(true);
  return (
    <div className="col-12 col-xl-3 col-lg-3 leftTopContainer  mt-4 mt-xl-0 mt-lg-0">
      <Dropdown className="col-12" isOpen={openCategori}  >
        <DropdownToggle
            tag="button"
            className="btn-cat col-12"
            onClick={()=>setOpenCategori(true)}
        >
          <Menu size={20}/> Categories
        </DropdownToggle>
        <DropdownMenu className="col-12 menu content">
          <LeftTopOption Icon={Supermarket} title="Supermarket" className="leftTarget"/>
          <LeftTopOption Icon={Home} title="Home & Office" />
          <LeftTopOption Icon={Phone} title="Phones & Tablets" />
          <LeftTopOption Icon={Computing} title="Computing" />
          <LeftTopOption Icon={Electronics} title="Electronics" />
          <LeftTopOption Icon={Shirt} title="Fashion" />
          <LeftTopOption Icon={Gaming} title="Gaming" />
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default LeftTop

import React from 'react';
import '../../../Styles/LeftTop.css';
import LeftTopOption from './LeftTopOption';
import Supermarket from '../../../images/supermarket.png';
import Health from '../../../images/beauty.png';
import Home from '../../../images/home.png';
import Phone from '../../../images/phones.png';
import Computing from '../../../images/computing.png';
import Electronics from '../../../images/tv.png';
import Shirt from '../../../images/shit.png';
import Gaming from '../../../images/gaming.png';


function LeftTop() {
  return (
    <div className="col-12 col-xl-2 col-lg-2   mt-4 mt-xl-0 mt-lg-0">
    <div className="leftTopContainer">
      <LeftTopOption Icon={Supermarket} title="Supermarket" className="leftTarget"/>
      <LeftTopOption Icon={Home} title="Home & Office" />
      <LeftTopOption Icon={Phone} title="Phones & Tablets" />
      <LeftTopOption Icon={Computing} title="Computing" />
      <LeftTopOption Icon={Electronics} title="Electronics" />
      <LeftTopOption Icon={Shirt} title="Fashion" />
      <LeftTopOption Icon={Gaming} title="Gaming" />
    </div>
    </div>
  )
}

export default LeftTop

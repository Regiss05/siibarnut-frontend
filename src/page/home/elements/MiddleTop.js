import React, { useState, useEffect } from 'react';
import '../../../Styles/MiddleTop.css';
import image1 from '../../../images/firstimage.jpg';
import image2 from '../../../images/secondimage.jpg';
import image3 from '../../../images/thirdimage.gif';
import image4 from '../../../images/forthimage.jpg';
import image5 from '../../../images/fifthimage.jpg';
import image6 from '../../../images/sixthimage.jpg';
import image7 from '../../../images/seventh.jpg';
import image8 from '../../../images/lastimage.jpg';
import ButtonSlides from './ButtonSlides';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Slider from "react-slick";
function MiddleTop() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    className: "slid",
      autoplay: true,
    customPaging: function () {

      return (
          <div style={{
            height: 10,
            width: 10,
            backgroundColor: "rgba(180,180,180,0.48)",
            marginTop: 10,
            borderRadius: 5
          }}>
          </div>
      );
    },
    responsive: [
      {
        breakpoint: 24,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
            classNames: "col-12",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
            classNames: "col-12",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          classNames: "col-12",
        }
      }
    ]

  };

  return (
    <div className="middleTopContainer col-12 col-xl-8 col-lg-8 ">
      <Slider {...settings}>
       <img src={image1} alt="imglg" />
       <img src={image2} alt="imglg" />
       <img src={image3} alt="imglg" />
      </Slider>
    </div>
  )
}

export default MiddleTop

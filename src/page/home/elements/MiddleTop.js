import React from 'react';
import '../../../Styles/MiddleTop.css';
import image1 from '../../../images/ulistartion/md1.jpg';
import image2 from '../../../images/ulistartion/md1.jpg';
import image3 from '../../../images/ulistartion/md1.jpg';
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
    <div className="middleTopContainer col-12 col-xl-9 col-lg-9 ">
      <Slider {...settings}>
       <img src={image1} alt="imglg" className="imglg" />
       <img src={image2} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
       <img src={image3} alt="imglg" className="imglg"  />
      </Slider>
    </div>
  )
}

export default MiddleTop

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {useNavigate} from "react-router-dom";
const Dcard = ({data}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 24,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          infinite: true,
          dots: false,
          classNames: "col-12",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          classNames: "col-12",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          classNames: "col-12",
        }
      }
    ]
  }
  const history = useNavigate();
  return (
    <>
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <>
              <div className='box productC' key={index} onClick={() => history( "/produit", {state: item})}>
                <div className='img'>
                  <img src={process.env.REACT_APP_BASE_URL+"/img/"+item.img_princ} alt='' width='100%' />
                </div>
               <div>
                 <h4>{item.designation}</h4>
                 <span>{item.Prix_unitaire}</span>
               </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard

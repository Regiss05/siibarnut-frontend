import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {useNavigate} from "react-router-dom";
const Dcard = ({data}) => {
  const settings2 = {
    dots: false,
    infinite:data.length > 6 ? true :false,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: data.length > 6 ? true :false,
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
        breakpoint: 900,
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
      <Slider {...settings2}>
        {data.map((item) => {
          return (
            <>
              <div className='box productC' key={item.id_produits} onClick={() => history( "/produit", {state: item})}>
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

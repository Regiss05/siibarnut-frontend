import React, {useEffect, useState} from 'react';
import '../../../Styles/MiddleTop.css';
import Slider from "react-slick";
import axios from "axios";

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
    const [produits,setProducts]=useState(null)
    // eslint-disable-next-line
    const [isLog, setislog] = useState(false);

    const getPub=()=>{
        setislog(true)
        console.log("get")
        const options = {
            url: process.env.REACT_APP_BASE_URL + "/pub" ,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        };
        axios(options)
            .then(response => {
                setislog(false)
                if (response.data.status===200){
                    console.log(response.data)
                    setProducts(response.data?.data);
                }else {

                    setProducts(null)
                }
            })
            .catch(err => {
                setislog(false)
                console.log(err.response);
                if (err.response){
                    if (err.response.data.status===404){
                        console.log(err.response.data)
                        setProducts(null)

                    }else {

                    }
                }else {

                }
            });
    }
    useEffect(()=>{
            // eslint-disable-next-line
            getPub();
        }, // eslint-disable-next-line
        [])

  return (
    <div className="middleTopContainer col-12 col-xl-9 col-lg-9 ">
      {/* <Slider {...settings}>
          {
              produits
                  ?
                  produits.map((item,index)=><img
                      src={process.env.REACT_APP_BASE_URL+"/img/"+item.image}
                      alt="imglg" className="imglg" key={index}/>)

                  :
                  null
          }
      </Slider> */}
      {/* <img src={marketingphoto} alt="mark" className="market"/> */}
      <iframe src="https://www.google.com/maps/d/embed?mid=1HLd8in2lwquXprZuuz9-z14AgP7EhbU&ehbc=2E312F" width="1290" height="680"></iframe>
    </div>
  )
}

export default MiddleTop

import React from 'react';
import '../../../Styles/RightTop.css';
import CatItem from "../../../Components/elements/catItem";

function RightTop() {
    const data = [
        {
            cover: "http://muda-backend.webmaster019.com/img/865523742fkmac1.jpeg",
            title: "Ordinateur",
        },
        {
            cover: "http://muda-backend.webmaster019.com/img/1575168357fkii13.jpeg",
            title: "Téléphone",
        },
        {
            cover: "http://muda-backend.webmaster019.com/img/865523742fkmac1.jpeg",
            title: "Téléphone",
        },
    ]
  return (
    <div className="rightTopContainer d-none d-lg-flex d-xl-flex col-12 col-xl-3 col-lg-3  mt-4 mt-xl-0 mt-lg-0">
      <div className="rightTopDiv col-12 row">
          <h5>Top Categories</h5>
          {
              data.map((item,index)=>   <div className="col-12" key={index}>
                  <div className='box productD' >
                      <div className='img'>
                          <img src={item.cover} alt='' width='100%' />
                      </div>
                      <div>
                          <h4>{item.title}</h4>
                      </div>
                  </div>
              </div>)
          }
      </div>
    </div>
  )
}

export default RightTop

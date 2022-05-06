import React from 'react';
import '../../../Styles/RightTop.css';

function RightTop() {
    const data = [
        {
            cover: "http://muda-backend.galafly.com/img/865523742fkmac1.jpeg",
            title: "Ordinateur",
        },
        {
            cover: "http://muda-backend.galafly.com/img/1575168357fkii13.jpeg",
            title: "Téléphone",
        },
        {
            cover: "http://muda-backend.galafly.com/img/865523742fkmac1.jpeg",
            title: "Téléphone",
        },
    ]
  return (
    <div className="rightTopContainer d-none d-xl-flex d-lg-flex  col-12 col-xl-3 col-lg-3  mt-4 mt-xl-0 mt-lg-0">
      <div className="rightTopDiv col-12 row">
          {
              data.map((item,index)=>   <div className="col-6 col-xl-12 col-lg-12" key={index}>
                  <div className='box productD' >
                      <div className='img'>
                          <img src={item.cover} alt='' width='100%' />
                      </div>
                  </div>
              </div>)
          }
      </div>
    </div>
  )
}

export default RightTop

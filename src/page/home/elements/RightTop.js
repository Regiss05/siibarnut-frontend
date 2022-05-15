import React from 'react';
import '../../../Styles/RightTop.css';
import image1 from '../../../images/ulistartion/mm1.jpg';
import image3 from '../../../images/ulistartion/mm3.jpg';

function RightTop() {
    const data = [
        {
            cover: image1,
        },
        {
            cover: image3,
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

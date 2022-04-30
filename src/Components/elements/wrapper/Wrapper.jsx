import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
      classN:"productBackground1"
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
      classN:"productBackground2"
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
      classN:"productBackground3"
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
      classN:"productBackground4"
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container   col-12 '>
          <div className="row">
          {data.map((val, index) => {
            return (
              <div className='col-12 col-md-6 col-lg-3 col-xl-3' key={index}>
              <div className={`productP ${val.classN}`}>

                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
              </div>
            )
          })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Wrapper

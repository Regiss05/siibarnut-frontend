import React from "react";

const CategorieSection=()=>{
    const data = [
        {
            cover: "http://muda-backend.webmaster019.com/img/865523742fkmac1.jpeg",
            title: "Ordinateur",
        },
        {
            cover: "http://muda-backend.webmaster019.com/img/865523742fkmac1.jpeg",
            title: "Ordinateur",
        },
        {
            cover: "http://muda-backend.webmaster019.com/img/865523742fkmac1.jpeg",
            title: "Ordinateur",
        },
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
        {
            cover: "http://muda-backend.webmaster019.com/img/865523742fkmac1.jpeg",
            title: "Téléphone",
        },
        {
            cover: "http://muda-backend.webmaster019.com/img/865523742fkmac1.jpeg",
            title: "Téléphone",
        },
    ]
    return (
        <>
            <section className='Discount background NewArrivals'>
                <div className='container'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <h5>Categories</h5>
                        </div>
                    </div>
                 <div className="col-12 row">
                     {
                         data.map((item,index)=>   <div className="col-6 col-xl-2 col-lg-2" key={index}>
                             <div className='box productDs' >
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
            </section>
        </>
    )
}
export default CategorieSection;
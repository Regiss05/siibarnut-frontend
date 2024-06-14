import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import ProductLoader from "../../../Components/elements/productLoader";
import {useNavigate} from "react-router-dom";

const CategorieSection=({setcategorie})=>{
    const [data,setData]=useState(null)
    const [isLog, setislog] = useState(false);
    const history = useNavigate();

    const getcategorie=()=>{
        setislog(true)
        console.log("get")
        const options = {
            url: process.env.REACT_APP_BASE_URL + "/categories" ,
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
                    setData(response.data?.data);
                }else {
                    toast.error(response?.data?.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(err => {
                setislog(false)
                console.log(err.response);
                toast.error('Problème de connexion', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }
    useEffect(()=>{
        getcategorie();
    },[])
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
                         isLog
                             ?
                             <div className="row">
                                 <ProductLoader/>
                             </div>
                             :
                         data
                             ?
                             data.map((item, index) => <div className="col-3 col-xl-1 col-lg-1" key={index}>
                                 <div className='rightTopContainer d-none d-xl-flex d-lg-flex  col-12 col-xl-3 col-lg-3  mt-4 mt-xl-0 mt-lg-0Container d-none d-xl-flex d-lg-flex  col-12 col-xl-3 col-lg-3  mt-4 mt-xl-0 mt-lg-0Container d-none d-xl-flex d-lg-flex  col-12 col-xl-3 col-lg-3  mt-4 mt-xl-0 mt-lg-0s' onClick={() => {
                                     history( "/produits", {state: item})
                                 }}>
                                     <div className='img'>
                                         <img src={process.env.REACT_APP_BASE_URL + "/img/" + item.img} alt=''
                                              width='100%'/>
                                     </div>
                                     <div>
                                         <h4>{item.designation.length < 8
                                             ? item.designation
                                             :item.designation.substr(0,8)+"..."
                                         }</h4>
                                     </div>
                                 </div>
                             </div>)
                             :
                             null}

                 </div>
                </div>
            </section>
        </>
    )
}
export default CategorieSection;
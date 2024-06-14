import React, {useEffect, useState} from "react"
import Dcard from "./Dcard"
import axios from "axios";
import ProductLoader from "../productLoader";
import {toast} from "react-toastify";

const Discount = () => {

  const [produits,setProducts]=useState(null)
  const [isLog, setislog] = useState(false);


  const getProducts=()=>{
    setislog(true)
    console.log("get")
    const options = {
      url: process.env.REACT_APP_BASE_URL + "/product?top=1" ,
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
    getProducts();
  },[])

  return (
    <>
      <section className='Discount background NewArrivals'>
        {/* <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h5>Promotions</h5>
            </div>
          </div>

          {
            isLog
              ?
                <ProductLoader one/>
                :
                produits
                ?
                <Dcard data={produits}  />
                    :
                    null

          }
        </div> */}
        <div style={{
          marginBottom:20,
        }}/>
      </section>
    </>
  )
}

export default Discount

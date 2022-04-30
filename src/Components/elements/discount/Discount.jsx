import React, {useEffect, useState} from "react"
import Dcard from "./Dcard"
import axios from "axios";
import ProductLoader from "../productLoader";

const Discount = () => {

  const [produits,setProducts]=useState(null)
  const [isLog, setislog] = useState(false);


  const getProducts=()=>{
    setislog(true)
    console.log("get")
    const options = {
      url: process.env.REACT_APP_BASE_URL + "/product" ,
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
            alert(response?.data?.message,"Erreur")
          }
        })
        .catch(err => {
          setislog(false)
          console.log(err.response);
          alert("Problème de connexion","Erreur")
        });
  }
  useEffect(()=>{
    getProducts();
  },[])

  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h5>Top Products</h5>
            </div>
          </div>

          {
            isLog
              ?
                <ProductLoader/>
                :
                produits
                ?
                <Dcard data={produits}  />
                    :
                    null

          }
        </div>
      </section>
    </>
  )
}

export default Discount

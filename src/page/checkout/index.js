import React, {useContext, useEffect, useState} from "react";
import Footer from "../../Components/global/footer";
import {CardContext} from "../../context/cart";
import "../../Styles/card.css"
import mob from "../../images/ulistartion/mbM.jpg"
import cd from "../../images/ulistartion/cdr.jpg"
import {AuthContext} from "../../context/auth";
import axios from "axios";
import {Spinner} from "reactstrap";
import {toast} from "react-toastify";
import ModalPay from "../../Components/elements/modalPay";
const Checkout = ()=>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const {CartItem,deleteAll}=useContext(CardContext);
    const {userData}=useContext(AuthContext);
    const [isLogFav, setisLogFav] = useState(false)
    const [isOpenPay, setIsOpenPay] = useState(false)
    const [codes, setCode] = useState(null)
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.Prix_unitaire, 0)
    const [data,setData]=useState({
        products:CartItem,
        totalPix:totalPrice,
        ville:"",
        adresse:"",
        nomReceveur:"",
        numeroReceveur:"",
    })
    const openPay=(code)=>{
        setIsOpenPay(true)
        setCode(code)
    }
    const closePay=()=>{
        setIsOpenPay(false)
        setCode("")
        setData({
            products:CartItem,
            totalPix:totalPrice,
            ville:"",
            adresse:"",
            nomReceveur:"",
            numeroReceveur:"",
        })
        deleteAll()

    }
    const addCommande=async e =>{
        e.preventDefault()
        let user=localStorage.getItem("Id_user");
        //setUser(JSON.parse(user))
        setisLogFav(true)
        if (user){

            const options = {
                url: process.env.REACT_APP_BASE_URL + "/commande/"+user+"/add" ,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                data:data

            };
            await axios(options)
                .then(response => {
                    setisLogFav(false)
                    console.log("codeMM",response.data)
                    console.log("code",response.data.code)
                    if (response.data.status == 201){

                        openPay(response.data.code)
                        toast.success(response.data.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    }else {
                        toast.warning(response.data.message, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                        //console.log("addCmd",response.data)
                })
                .catch(err => {
                    setisLogFav(false)
                    toast.error('Problème de connexion', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        }
    }

    return(
        <div>
            <ModalPay isOpen={isOpenPay} close={closePay} codeTrans={codes}/>
            <section className="checkout spad">
                <div className="container">

                    <div className="checkout__form">
                        <h6>Entrez les  informations de la livraison </h6>
                        <form action="/" method="post" onSubmit={addCommande} >
                            <div className="row">
                                <div className="col-lg-8 col-md-6">

                                <div className="checkout__input">
                                    <p>Viller<span>*</span></p>
                                    <input
                                        type="text" value={data.ville}
                                       name="city" placeholder="Ville"
                                        required
                                        onChange={e=>setData({
                                            ...data,
                                            ville: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="checkout__input">
                                    <p>Adresse<span>*</span></p>
                                    <input type="text"
                                           placeholder="Address"
                                           name="address"
                                           required
                                           value={data.adresse}
                                           onChange={e=>setData({
                                               ...data,
                                               adresse: e.target.value
                                           })}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Nom du receveur<span>*</span></p>
                                            <input
                                                type="text" name="receiverName"
                                                placeholder="Nom du receveur" required
                                                value={data.nomReceveur}
                                                onChange={e=>setData({
                                                    ...data,
                                                    nomReceveur: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Numéro de téléphone du receveur<span>*</span></p>
                                            <input
                                                type="text" name="receiverPhone"
                                                placeholder="Numéro de téléphone du receveur" required
                                                value={data.numeroReceveur}
                                                onChange={e=>setData({
                                                    ...data,
                                                    numeroReceveur: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            {
                                                CartItem.length === 0
                                                ?
                                                    <h1 className='no-items productdd'>Vous avez pas de produit dans votre panier</h1>
                                                :
                                                isLogFav
                                                    ?
                                                   <div className="col-12 d-flex align-content-center justify-content-center">
                                                       <Spinner/>
                                                   </div>
                                                    :
                                                <button
                                                className="btn btn-success col-12"
                                                type={"submit"}
                                            >Valider la commande</button>
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>

                                <div className="col-12 col-xl-4 col-lg-4">
                                    <div className='cart-total  col-12 productdd'>
                                        <h2>Ma Factures</h2>
                                        {CartItem.length === 0 && <h1 className='no-items productdd'>Vous avez pas de produit dans votre panier</h1>}
                                        {CartItem.map((item) => {
                                            const productQty = item.Prix_unitaire * item.qty

                                            return (
                                                <div className=' col-12 productdds d_flex' key={item.id_produits}>
                                                   <div className="d-flex flex-column ">
                                                       <div className='img-cd '>
                                                           <img src={process.env.REACT_APP_BASE_URL+"/img/"+item.img_princ} alt='' className="img-fluid" />
                                                       </div>
                                                       <h3>{item.designation}</h3>
                                                   </div>
                                                    <div className='cart-details'>

                                                        <h6>
                                                            ${item.Prix_unitaire}.00 * {item.qty}{" "}
                                                            <span>${productQty}.00</span>
                                                        </h6>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className=' d_flex'>
                                            <h4>Total Price :</h4>
                                            <h3>${totalPrice}.00</h3>
                                        </div>
                                    </div>
                                </div>

                    </div>
                </form>
        </div>
</div>
</section>
            <Footer/>
        </div>
    )
}
export default Checkout;
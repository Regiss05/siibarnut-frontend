import React, {useContext, useEffect} from "react";
import Footer from "../../Components/global/footer";
import {CardContext} from "../../context/cart";
import "../../Styles/card.css"
import mob from "../../images/ulistartion/mbM.jpg"
import cd from "../../images/ulistartion/cdr.jpg"
const Checkout = ()=>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const {CartItem}=useContext(CardContext);
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.Prix_unitaire, 0)
    return(
        <div>
            <section className="checkout spad">
                <div className="container">

                    <div className="checkout__form">
                        <h6>Entrez les  informations de la livraison </h6>
                        <form action="/" method="post" >
                            <div className="row">
                                <div className="col-lg-8 col-md-6">

                                <div className="checkout__input">
                                    <p>Viller<span>*</span></p>
                                    <input type="text" name="city" placeholder="Ville" required/>
                                </div>
                                <div className="checkout__input">
                                    <p>Adresse<span>*</span></p>
                                    <input type="text" placeholder="Address" name="address" required/>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Nom du receveur<span>*</span></p>
                                            <input type="text" name="receiverName" placeholder="Nom du receveur" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Numéro de téléphone du receveur<span>*</span></p>
                                            <input type="text" name="receiverPhone" placeholder="Numéro de téléphone du receveur" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <button className="btn btn-success col-12">Valider la commande</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <p>Mode de paiment<span>*</span></p>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <button className=" btn d-flex flex-column justify-content-center align-items-center p-2">
                                                    <img src={mob} alt="man" className="img-fluid"/>

                                                </button>
                                                <span>Payer  par Mobile Many</span>
                                            </div>
                                            <div className="col-6 ">
                                                <button className=" btn d-flex flex-column justify-content-center align-items-center p-2">
                                                    <img src={cd} alt="man" className="img-fluid"/>

                                                </button>
                                                <span>Payer par Carte</span>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                                <div className="col-12 col-xl-4 col-lg-4">
                                    <div className='cart-total  col-12 productdd'>
                                        <h2>Ma Factures</h2>
                                        {CartItem.length === 0 && <h1 className='no-items productdd'>No Items are add in Cart</h1>}
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
                                                            ${item.Prix_unitaire}.00 * {item.qty}
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
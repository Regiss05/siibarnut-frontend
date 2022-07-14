import React, {useContext} from "react"
import "../../Styles/card.css"
import {CardContext} from "../../context/cart";
import {useNavigate} from "react-router-dom";
import {Container} from "reactstrap";
import Footer from "../../Components/global/footer";

const Cart = () => {
    // Stpe: 7   calucate total of items
    const {addToCart,decreaseQty,CartItem,deleteProduct}=useContext(CardContext);
    const totalPrice = CartItem.reduce((price, item) => item.prix_de_Solde > 0
            ?
            price + item.qty * item.prix_de_Solde
            :
            price + item.qty * item.Prix_unitaire
        , 0)
    const history = useNavigate();
    console.log("cartItems",CartItem)

    // prodcut qty total
    return (
        <>
            <section className='cart-items'>
                    <div className="row container">
                    {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

                    <div className='col-12 col-xl-9 col-lg-9 cart-details'>
                        {CartItem.length === 0 && <h1 className='no-items productdd'>No Items are add in Cart</h1>}

                        {/* yasma hami le cart item lai display garaaxa */}
                        {CartItem.map((item) => {
                            const productQty = item.Prix_unitaire * item.qty

                            return (
                                <div className='cart-list col-12 productdd row' key={item.id_produits}>

                                    <div className="d-flex justify-content-between col-12">
                                        <div className='img d-flex flex-column  '>
                                            <img src={process.env.REACT_APP_BASE_URL+"/img/"+item.img_princ} alt='' />
                                        </div>
                                        <div className="d-flex flex-column col-9">
                                            <div className='removeCart'>
                                                <button className=' btn btn-danger' onClick={() => deleteProduct(item)}>
                                                    <i className='fa-solid fa-xmark'></i>
                                                </button>
                                            </div>
                                            <div className='cart-details flex flex-wrap  flex-column col-12 '>

                                                <h3>{item.designation}</h3>
                                                <div className="d-flex justify-content-between align-items-center col-12">
                                                    <div>
                                                <h4>
                                                    ${
                                                    item.prix_de_Solde > 0
                                                        ?
                                                        item.prix_de_Solde
                                                        :
                                                        item.Prix_unitaire
                                                }.00 * {item.qty}
                                                    <span>${
                                                        item.prix_de_Solde > 0
                                                            ?
                                                            item.prix_de_Solde * item.qty
                                                            :
                                                            item.Prix_unitaire * item.qty
                                                    }.00</span>
                                                </h4>
                                                    </div>
                                                <div className="d-flex flex-wrap justify-content-between align-items-center ">

                                                        <div className='cartControl '>
                                                            {
                                                                parseInt(item.quantites) === parseInt(item.qty)
                                                                    ?
                                                                    null
                                                                    :
                                                                    <button className='incCart d-flex
                                                                    justify-content-center align-items-center'
                                                                            onClick={() => addToCart(item)}>
                                                                        <i className='fa-solid fa-plus'/>
                                                                    </button>
                                                            }
                                                            <button className='desCart d-flex justify-content-center align-items-center' onClick={() => decreaseQty(item)}>
                                                                <i className='fa-solid fa-minus'/>
                                                            </button>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>




                                </div>
                            )
                        })}
                    </div>

                  <div className="col-12 col-xl-3 col-lg-3">
                      <div className='cart-total  col-12 productdd'>
                          <h2>Panier</h2>
                          <div className=' d_flex'>
                              <h4>Total Price :</h4>
                              <h3>${totalPrice}.00</h3>
                          </div>
                          {CartItem.length > 0 &&<button
                              className="btn btn-primary btnDetail
                                                     text-uppercase mr-2 px-4 col-12 "
                              onClick={() => history("/checkout")}
                          >
                              Payermaintenat
                          </button>}
                      </div>
                  </div>
                    </div>
            </section>
    <Footer/>
    </>
    )
}

export default Cart

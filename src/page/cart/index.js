import React, {useContext} from "react"
import "../../Styles/card.css"
import {CardContext} from "../../context/cart";

const Cart = () => {
    // Stpe: 7   calucate total of items
    const {addToCart,decreaseQty,CartItem,deleteProduct}=useContext(CardContext);
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.Prix_unitaire, 0)

    // prodcut qty total
    return (
        <>
            <section className='cart-items'>
                <div className='container  '>
                    <div className="row">
                    {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

                    <div className='col-12 col-xl-9 col-lg-9 cart-details'>
                        {CartItem.length === 0 && <h1 className='no-items productdd'>No Items are add in Cart</h1>}

                        {/* yasma hami le cart item lai display garaaxa */}
                        {CartItem.map((item) => {
                            const productQty = item.Prix_unitaire * item.qty

                            return (
                                <div className='cart-list col-12 productdd d_flex' key={item.id_produits}>
                                    <div className='img '>
                                        <img src={process.env.REACT_APP_BASE_URL+"/img/"+item.img_princ} alt='' />
                                    </div>
                                    <div className='cart-details'>
                                        <h3>{item.designation}</h3>
                                        <h4>
                                            ${item.Prix_unitaire}.00 * {item.qty}
                                            <span>${productQty}.00</span>
                                        </h4>
                                    </div>
                                    <div className='cart-items-function'>
                                        <div className='removeCart'>
                                            <button className=' btn btn-danger' onClick={() => deleteProduct(item)}>
                                                <i className='fa-solid fa-xmark'></i>
                                            </button>
                                        </div>
                                        {/* stpe: 5
                    product ko qty lai inc ra des garne
                    */}
                                        <div className='cartControl d_flex'>
                                            <button className='incCart' onClick={() => addToCart(item)}>
                                                <i className='fa-solid fa-plus'></i>
                                            </button>
                                            <button className='desCart' onClick={() => decreaseQty(item)}>
                                                <i className='fa-solid fa-minus'></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className='cart-item-price'></div>
                                </div>
                            )
                        })}
                    </div>

                  <div className="col-12 col-xl-3 col-lg-3">
                      <div className='cart-total  col-12 productdd'>
                          <h2>Cart Summary</h2>
                          <div className=' d_flex'>
                              <h4>Total Price :</h4>
                              <h3>${totalPrice}.00</h3>
                          </div>
                      </div>
                  </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
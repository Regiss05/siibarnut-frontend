import React, {useContext, useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom";
import Footer from "../../Components/global/footer";
import "../../Styles/datailProdCss.css"
import {ArrowLeft} from "@material-ui/icons";
import Discount from "../../Components/elements/discount/Discount";
import {CardContext} from "../../context/cart";
import {Heart, Share2} from "react-feather";

const DetailProduct = () => {
    const location = useLocation();
    const data=location?.state;
    console.log("location", location)
    const history = useNavigate();
    const [image,setImage]=useState(data?.img_princ);
    const {addToCart}=useContext(CardContext);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="">
            <div className="conteiant-site">
                {
                    data
                        ?
                    <div className="container mt-5 mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-xl-10 col-lg-10">
                            <div className="cards">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="images p-3">
                                            <div className="text-center p-4">
                                                <img id="main-image" src={process.env.REACT_APP_BASE_URL+"/img/"+image} className="img-fluid" alt="imhj"/>
                                            </div>
                                            {
                                                data.images
                                                    ?
                                                <div className="thumbnail text-center row justify-content-center align-items-center cursor-pointe ">
                                                    {
                                                        data.images.map((item,index)=><div className="col-4 thumbnailItem" key={index} onClick={()=>setImage(item.image)}>
                                                            <img  src={process.env.REACT_APP_BASE_URL+"/img/"+item.image}  className="img-fluid imagedetail" alt="imjh"/>
                                                        </div>)
                                                    }
                                            </div>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <button onClick={()=>history("/")} className="d-flex  align-items-start align-items-center btn">
                                                    <ArrowLeft/>
                                                    <span className="ml-1">Back</span>
                                                </button>
                                                <button onClick={()=>history("/")} className="d-flex align-items-start align-items-center btn gap-2">
                                                    <Share2/>
                                                    <Heart/>
                                                </button>
                                            </div>
                                            <div className="mt-4 mb-3"><span
                                                className="text-uppercase text-muted3 brand fw-bold">{data.categorie?.designation}</span>
                                                <h5 className="text-uppercase">{data.designation}</h5>
                                                <div className="price d-flex flex-row align-items-center"><span
                                                    className="act-price">${data.Prix_unitaire}</span>
                                                </div>
                                            </div>
                                            <p className="about">{data.Courte_Description}</p>
                                            <h5>Description</h5>
                                            <p className="about">{data.Longue_Description}</p>
                                            <div className="sizes mt-5">
                                                <h6 className="text-uppercase">Couleur</h6>
                                                {
                                                    data?.couleur
                                                        ?
                                                        data.couleur.split(',').map((item,index)=> <label className="radio mx-1" key={index}>
                                                            <input type="radio" name="size" value="S" checked/>
                                                            <span>{item}</span>
                                                        </label>)

                                                        :
                                                        null
                                                }
                                            </div>
                                            <div className="cart mt-4 align-items-center d-flex justify-content-between ">
                                                <button className="btn btn-danger text-uppercase mr-2 px-4 " onClick={()=>{
                                                    addToCart(data)
                                                }
                                                }>Add to
                                                    cart
                                                </button>
                                                <h6 className="">(Quantité en stock : {data.quantites})</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    :
                    null
                }
        </div>
            <Discount />

    <Footer/>
</div>
)
}
export default DetailProduct;
import React, {useContext, useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom";
import Footer from "../../Components/global/footer";
import "../../Styles/datailProdCss.css"
import {ArrowLeft} from "@material-ui/icons";
import Discount from "../../Components/elements/discount/Discount";
import {CardContext} from "../../context/cart";
import {Clipboard, Heart, Share2, ShoppingCart} from "react-feather";
import {Container, Modal, ModalBody, ModalHeader} from "reactstrap";
import {
    FacebookShareCount,
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    TelegramIcon,
    WhatsappIcon,
} from "react-share";
const DetailProduct = () => {
    const location = useLocation();
    const data=location?.state;
    console.log("location", location)
    const history = useNavigate();
    const [image,setImage]=useState(data?.img_princ);
    const {addToCart,VerifIfIsExixte}=useContext(CardContext);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const [isopenModal, setIsOpenModal] = useState(false);


    const closeModal=()=>{
        setIsOpenModal(false)
    }
    const openModal=()=>{
        setIsOpenModal(true)
    }
    const shareUrl = 'http://github.com';
    const title = 'GitHub'
    return (
        <React.Fragment>
            <Modal isOpen={isopenModal} size="md" autoFocus={false}>
                <ModalHeader toggle={closeModal} style={{borderBottom:"none"}}>
                    Partager sur :
                </ModalHeader>
                <ModalBody className="bodyModal2" >
                    <Container>
                        <div className="Demo__some-network">
                            <FacebookShareButton
                                url={shareUrl}
                                quote={title}
                                className="Demo__some-network__share-button"
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>

                            <div>
                                <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                                    {count => count}
                                </FacebookShareCount>
                            </div>
                        </div>

                        <div className="Demo__some-network">
                            <FacebookMessengerShareButton
                                url={shareUrl}
                                appId="521270401588372"
                                className="Demo__some-network__share-button"
                            >
                                <FacebookMessengerIcon size={32} round />
                            </FacebookMessengerShareButton>
                        </div>

                        <div className="Demo__some-network">
                            <TwitterShareButton
                                url={shareUrl}
                                title={title}
                                className="Demo__some-network__share-button"
                            >
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>

                            <div className="Demo__some-network__share-count">&nbsp;</div>
                        </div>

                        <div className="Demo__some-network">
                            <TelegramShareButton
                                url={shareUrl}
                                title={title}
                                className="Demo__some-network__share-button"
                            >
                                <TelegramIcon size={32} round />
                            </TelegramShareButton>

                            <div className="Demo__some-network__share-count">&nbsp;</div>
                        </div>

                        <div className="Demo__some-network">
                            <WhatsappShareButton
                                url={shareUrl}
                                title={title}
                                separator=":: "
                                className="Demo__some-network__share-button"
                            >
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>

                            <div className="Demo__some-network__share-count">&nbsp;</div>
                        </div>

                        <div className="Demo__some-network">
                            <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                        </div>

                        <div className="Demo__some-network">
                            <button  className="btn-partage ">
                                <Clipboard size={17} round />
                            </button>
                        </div>

                    </Container>

                </ModalBody>
            </Modal>
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
                                    <div className="col-md-6 ">
                                        <div className="images px-2   row">


                                                <div className="col-4 pt-2  thumbnail text-center row justify-content-center align-items-center cursor-pointe ">
                                                    <div className="col-12 mb-1 thumbnailItem"  onClick={()=>setImage(image)}>
                                                    <img  src={process.env.REACT_APP_BASE_URL+"/img/"+image}  className="img-fluid imagedetail" alt="imjh"/>
                                                    </div>
                                                    {
                                                        data.images
                                                            ?
                                                        data.images.map((item,index)=><div className="col-12 mb-1 thumbnailItem" key={index} onClick={()=>setImage(item.image)}>
                                                            <img  src={process.env.REACT_APP_BASE_URL+"/img/"+item.image}  className="img-fluid imagedetail" alt="imjh"/>
                                                        </div>)
                                                            :
                                                            null
                                                    }
                                            </div>
                                            <div className="text-center p-4 col-8">
                                                <img id="main-image" src={process.env.REACT_APP_BASE_URL+"/img/"+image} className="img-fluid" alt="imhj"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <button onClick={()=>history("/")} className="d-flex  align-items-start align-items-center btn">
                                                    <ArrowLeft/>
                                                    <span className="ml-1">Back</span>
                                                </button>
                                                <button onClick={openModal} className="d-flex align-items-start align-items-center btn gap-2">
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
                                            <div className="cart mt-4 align-items-center row d-flex justify-content-between ">
                                                <div className="col-12 col-xl-6 col-lg-6 mt-1">
                                                <button className="btn btn-danger btnDetail text-uppercase mr-2 px-4 col-12  " onClick={()=>{
                                                    addToCart(data)
                                                }
                                                }>Ajouter Au panier
                                                </button>
                                                </div>
                                                {
                                                    VerifIfIsExixte
                                                        ?
                                                        <div className="col-12 col-xl-6 col-lg-6 mt-1">
                                                    <button
                                                    className="btn btn-primary btnDetail  text-uppercase mr-2 px-4 col-12   ">
                                                    Payermaintenat
                                                </button>
                                                        </div>
                                                        :
                                                        null
                                                }
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
            <a href="/" className="abv btnover2" onClick={e=>{
                e.preventDefault()
                addToCart(data)
            }
            }>
                     <span >
                         <ShoppingCart size={20}/>
                         Ajouter au panier
                     </span>
            </a>
    <Footer/>
</div>
        </React.Fragment>
)
}
export default DetailProduct;
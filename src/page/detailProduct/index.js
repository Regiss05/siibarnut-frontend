import React, {useContext, useEffect, useState} from "react"
import {useLocation, useNavigate,useParams} from "react-router-dom";
import Footer from "../../Components/global/footer";
import "../../Styles/datailProdCss.css"
import {ArrowLeft} from "@material-ui/icons";
import Discount from "../../Components/elements/discount/Discount";
import {CardContext} from "../../context/cart";
import {Clipboard, Heart, Share2, ShoppingCart} from "react-feather";
import {Container, Modal, ModalBody, ModalHeader} from "reactstrap";
import logo from "../../images/logos/3.PNG"
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
import Slider from "react-slick";
import axios from "axios";
import {toast} from "react-toastify";
import ProductLoader from "../../Components/elements/productLoader";
import {Helmet} from "react-helmet";

const DetailProduct = () => {
    const location = useLocation();
    console.log("location", location)
    const history = useNavigate();
    const [data,setProducts]=useState(null)
    const [shareUrl,setshareUrl]=useState("")
    const [title,setTitle]=useState("")
    const [image,setImage]=useState(null);
    const {addToCart,VerifIfIsExixte,ToggleFavorit,VerifIfIsExixteFavori}=useContext(CardContext);

    const [isLog, setislog] = useState(false);
    let params =useParams();

    const getProducts=()=>{
        setislog(true)
        console.log("get")
        const options = {
            url: process.env.REACT_APP_BASE_URL + "/product/"+params.idprod ,
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
                    setImage(response?.data?.data?.img_princ)
                    setshareUrl("https://muda-market.com/produit/" + response.data?.data?.id_produits)
                    setTitle(response.data?.data?.designation)
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
                toast.error(err.response.data ? err.response.data.message:'Problème de connexion', {
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

    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        className: "slidI",
        autoplay: false,
        customPaging: function () {

            return (
                <div style={{
                    height: 10,
                    width: 10,
                    backgroundColor: "rgba(180,180,180,0.48)",
                    marginTop: 10,
                    borderRadius: 5
                }}>
                </div>
            );
        },
        responsive: [
            {
                breakpoint: 24,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    classNames: "col-12",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    classNames: "col-12",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    classNames: "col-12",
                }
            }
        ]

    };


    return (
        <React.Fragment>
            {
                data
                ?
                    <Helmet>
                        <meta name="description" content={data.Longue_Description} />
                        <meta name="og:title" content={data.designation}/>
                        <title>{data.designation}</title>
                        <meta name="og:description" content={data.Longue_Description} />
                        <meta name="og:image" content={process.env.REACT_APP_BASE_URL+"/img/"+image} />
                    </Helmet>
                :
                    <Helmet>
                        <meta name="description" content="Mudamarket product not found" />
                        <meta name="og:title" content="Mudamarket product not found" />
                        <meta name="og:description" content="Mudamarket product not found" />
                        <title>Mudamarket product not found</title>
                        <meta name="og:image" content={logo} />
                    </Helmet>
            }
            <Modal isOpen={isopenModal} toggle={closeModal} size="md" autoFocus={false}>
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
                    isLog
                        ?
                        <div className="row">
                            <ProductLoader/>
                        </div>
                        :
                    data
                        ?
                    <div className="container mt-5 mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-xl-10 col-lg-10">
                            <div className="cards">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="images px-2   row">

                                            <div className=" imgCont p-4 col-12 " >
                                            <Slider {...settings}>
                                                    <img id="main-image" src={process.env.REACT_APP_BASE_URL+"/img/"+image} className="img-fluidd" alt="imhj"/>


                                                {
                                                    data.images
                                                        ?
                                                        data.images.map((item,index)=>

                                                                <img id="main-image" key={index} src={process.env.REACT_APP_BASE_URL+"/img/"+item.image} className="img-fluidd" alt="imhj"/>

                                                        )
                                                        :
                                                        null
                                                }
                                            </Slider>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-start ">
                                                <button onClick={()=>history("/")} className="d-flex  align-items-start align-items-center btn">
                                                    <ArrowLeft/>
                                                    <span className="ml-1">Back</span>
                                                </button>
                                                <div className="d-flex align-items-start align-items-center ">
                                                <button onClick={openModal} className="d-flex align-items-start align-items-center btn gap-4">
                                                    <Share2/>
                                                </button>
                                                <button onClick={()=>ToggleFavorit(data)} className="d-flex align-items-start align-items-center btn gap-2">
                                                    <Heart color={VerifIfIsExixteFavori(data)?"#f00":"#000"}/>
                                                </button>
                                                </div>
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
                                                    VerifIfIsExixte(data)
                                                        ?
                                                        <div className="col-12 col-xl-6 col-lg-6 mt-1">
                                                    <button
                                                    className="btn btn-primary btnDetail
                                                     text-uppercase mr-2 px-4 col-12 "
                                                    onClick={()=>history("/checkout")}
                                                    >
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
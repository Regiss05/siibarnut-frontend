import React, {useContext, useEffect, useRef, useState} from "react";
import Footer from "../../Components/global/footer";
import {Container, Progress, Spinner} from "reactstrap";
import ProductsSections from "./elements/productsSections";
import Discount from "../../Components/elements/discount/Discount";
import {useLocation} from "react-router-dom";
import {AuthContext} from "../../context/auth";
import profImg from "../../images/ulistartion/6.png";
import {toast} from "react-toastify";

const Profil=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const {isLogin,userData,setUserData}=useContext(AuthContext);
    let [imageUploadProgress, setImageUploadProgress] = useState(null);
    const fileSelect = useRef(null);
    const [isLog, setislog] = useState(false);
    async function handleImageUpload() {
        if (fileSelect) {
            fileSelect.current.click();
        }
    }

    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {

            uploadFile(files[i]);
        }
    }

    function uploadFile(file) {
        setislog(true)
        setImageUploadProgress(null)
        const url = process.env.REACT_APP_BASE_URL+"/user/"+userData.Id_user+"/photo";
        const xhr = new XMLHttpRequest();
        const fd = new FormData();


        // Update progress (can be used to show progress indicator)
        xhr.upload.addEventListener("progress", (e) => {
            setImageUploadProgress(Math.round((e.loaded * 100.0) / e.total));
            console.log(Math.round((e.loaded * 100.0) / e.total));
        });

        xhr.addEventListener('load',async ()=>{
            console.log("xhr log",xhr.response)
            if (xhr.response){
                if (xhr.response.status==201){
                    //console.log("favorit",response.data)

                    setislog(false)

                    toast.success(xhr.response.message ? xhr.response.message :"Problème deconnexion", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                        await localStorage.setItem('userData', JSON.stringify({
                            ...userData,
                            profil:xhr.response.img
                        }));
                        setUserData({
                            ...userData,
                            profil:xhr.response.img
                        })
                    console.log("datata",{
                        ...userData,
                        profil:xhr.response.img
                    })






                    console.log("users",userData)

                }else {
                    toast.warning(xhr.response.message ? xhr.response.message :"Problème deconnexion", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setislog(false)
                }
            }else {
                toast.error("Problème deconnexion", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setislog(false)
            }


        });
        xhr.addEventListener('error',()=>{
            toast.error("Problème deconnexion", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setislog(false)
        });

        fd.append("images", file);
        xhr.responseType="json";
        xhr.open('POST',url);
        xhr.send(fd);
    }

    return(
       <div>
           {
               isLogin && userData
               ?
                       <div className="container profile-page">
                           <div className="row">
                               <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                                   <div className="cardsl profile-header">
                                       <div className="bodys">
                                           <div className="row">
                                               <div className="col-lg-4 col-md-4 col-12">
                                                   <div className="profile-image float-md-right"><img
                                                       src={userData.profil?process.env.REACT_APP_BASE_URL+"/img/"+userData.profil:profImg}
                                                       onError={e => {
                                                           e.target.src = profImg
                                                       }} alt="imgoo"
                                                   />
                                                   </div>
                                               </div>
                                               <div className="col-lg-8 col-md-8 col-12">
                                                   <h4 className="m-t-0 m-b-0"><strong>{userData?.Nom_complet}
                                                   </strong></h4>
                                                   <span className="job_post">{userData?.Phone}</span>
                                                   <div className="mt-3">

                                                       {
                                                           isLog
                                                               ?
                                                               <div className="d-flex
                                                               justify-content-between
                                                               col-12 align-items-center">
                                                                   <Progress value={imageUploadProgress} className="col-12">
                                                                       {imageUploadProgress}%
                                                                   </Progress>

                                                               </div>
                                                               :

                                                           <button
                                                               className="btn btn-primary btn-round"
                                                               onClick={handleImageUpload}>Changer la phote de profil
                                                           </button>
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
           <Container>
               <ProductsSections/>
           </Container>
           <input
               ref={fileSelect}
               type="file"
               accept="image/*"
               style={{display: "none"}}
               onChange={(e) => handleFiles(e.target.files)}
           />
           <Footer/>
       </div>
    )
}
export default Profil;
import React, {useContext, useState} from "react";
import { Modal, ModalBody, ModalHeader, Spinner} from "reactstrap";
import mob from "../../../images/ulistartion/mbM.jpg";
import cd from "../../../images/ulistartion/cdr.jpg";
import IntlTelInput from "react-intl-tel-input";
import {AuthContext} from "../../../context/auth";
import axios from "axios";
import {toast} from "react-toastify";


const ModalPay=({isOpen,close,codeTrans})=>{
const {userData}=useContext(AuthContext);
const [isLoader,setIsloader] = useState()
const [dataState,setdataState] = useState({
    phone:userData?.Phone,
    reference:codeTrans
})


    const pay=()=>{
        //setUser(JSON.parse(user))
        console.log("dataState",codeTrans)
        if (dataState.phone && codeTrans){
            setIsloader(true)
            const options = {
                url: process.env.REACT_APP_BASE_URL + "/commande/pay" ,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                data:{
                    "reference": codeTrans,
                    "phone": dataState.phone.replaceAll(" ","")
                }

            };
             axios(options)
                .then(response => {
                    setIsloader(false)
                    console.log(response.data)
                    if (response.data.status == 201){
                        close()
                        toast.success(response.data.data.message, {
                            position: "top-right",
                            autoClose: 500000,
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
                    console.log("addCmd",response.data)
                })
                .catch(err => {
                    setIsloader(false)
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
        <Modal isOpen={isOpen} size="md" autoFocus={false}>
            <ModalHeader  style={{borderBottom:"none"}}>
                Payer la facture
            </ModalHeader>
        <ModalBody className="bodyModal d-flex align-items-center justify-content-center" >
          <div className="container col-12">
                  <div className="col-lg-12">
                      <div className="checkout__input text-center">
                          <p>Mode de paiment<span>*</span></p>
                      </div>
                      <div className="d-flex justify-content-between align-content-center col-12">
                          <div className="col-6 p-2 ">
                            <div className="d-flex  justify-content-center align-content-center flex-column text-center">
                                <button className="activeSelectPay btn d-flex flex-column justify-content-center align-items-center p-2">
                                    <img src={mob} alt="man" className="img-fluid"/>
                                    <span>Payer  par Mobile Many</span>
                                </button>
                            </div>
                          </div>
                          <div className="col-6 p-2 ">
                              <div className="d-flex justify-content-center align-content-center flex-column text-center">
                              <button className=" btn d-flex flex-column justify-content-center align-items-center p-2">
                                  <img src={cd} alt="man" className="img-fluid"/>

                                  <span>Payer par Carte</span>
                              </button>
                              </div>

                          </div>

                      </div>

                      <div className="col-12  ">
                          <div className="checkout__input mt-1">
                              <p>Entrer votre numéro mobile Many<span>*</span></p>
                          </div>
                          <div className="PhoneInputCont container">
                              <IntlTelInput
                                  containerClassName="intl-tel-input col-12"
                                  inputClassName="form-control col-12"
                                  defaultCountry="cd"
                                  autoFocus={true}
                                  value={dataState.phone}
                                  onPhoneNumberChange={(isValid, value, selectedCountryData, fullNumber, extension) => {
                                      console.log("full num", fullNumber)
                                      setdataState({
                                          ...dataState,
                                          phone: fullNumber
                                      })
                                  }}
                              />
                          </div>
                          <div className="col-12 d-flex justify-content-center align-content-center ">
                              {
                                  isLoader
                                      ?
                                      <Spinner/>
                                      :
                                  <button className="btn btn-outline-dark btn-sm col-12" onClick={pay}>Payer</button>
                              }
                          </div>
                      </div>
              </div>
          </div>
        </ModalBody>
        </Modal>
    )
}
export default ModalPay

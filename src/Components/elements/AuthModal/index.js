import React, {useContext, useState} from "react";
import {AuthContext} from "../../../context/auth";
import {InputGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner} from "reactstrap";
import logo from "../../../images/logos/2.PNG"
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import {Lock} from "react-feather";
const AuthModal=()=>{
    const {isLoaderUser,isopenModalAut,closeModalAuth,login} = useContext(AuthContext);
    const [loginState, setLoginState] = useState({
        phone:"",
        password:"",
    });

    const handlerLogin=()=>{
        login(loginState.phone.trim(),loginState.password)
    }
    return(
        <Modal isOpen={isopenModalAut} size="md" autoFocus={false}>
        <ModalHeader toggle={closeModalAuth} style={{borderBottom:"none"}}/>
    <ModalBody className="bodyModal" >
       {/* <div className="d-flex justify-content-center align-items-center">
            <img src={logo} alt={"logg"} className="logo2"/>
        </div>*/}
        <div className="container">
            <h5 className="text-center">Connexion</h5>
            <div className="row ">
                <div className="col-12 col-xl-4 col-lg-4  d-flex justify-content-center align-items-center">
                    <img src={logo} alt={"logg"} className="logo2"/>
                </div>
                <div className="col-12 col-xl-8 col-lg-8  row container py-3">
                    <div className="col-12 ">
                    <div className="PhoneInputCont">
                        <IntlTelInput
                            containerClassName="intl-tel-input col-12"
                            inputClassName="form-control col-12"
                            defaultCountry="cd"
                            autoFocus={true}
                            onPhoneNumberChange={ (isValid, value, selectedCountryData, fullNumber, extension)=>{
                                console.log("full num",fullNumber)
                                setLoginState({
                                    ...loginState,
                                    phone: fullNumber
                                })
                            }}
                        />
                </div>
                    </div>
                    <div className="col-12 mt-3 ">
                    <div className=" p-1 col-12 ">
                        <div className="PhoneInputCont2 ">
                        <InputGroup>
                            <div className="col-2">
                                <Lock />
                            </div>
                            <input type="password" className="inputMy col-10" placeholder="Mot de passe"
                                   onChange={e=>setLoginState({
                                       ...loginState,
                                       password:e.target.value
                                   })}
                            />
                        </InputGroup>
                        </div>
                    </div>
                </div>
                    <div className="col-12 mt-3 ">
                    <div className=" p-1 col-12 ">
                        <InputGroup>{
                            !isLoaderUser
                                ?
                            <button className="col-12 btn btn-dark" onClick={handlerLogin}>Connexion</button>
                                :
                            <div className="col-12 text-center flex justify-content-center align-items-center">
                            <Spinner>...Loader</Spinner>
                            </div>}
                        </InputGroup>
                        </div>
                </div>

                </div>

            </div>
        </div>
    </ModalBody>

</Modal>
    )
}
export default AuthModal;
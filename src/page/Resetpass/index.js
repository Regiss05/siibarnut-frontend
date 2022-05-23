import React, {useContext, useState} from "react";
import IntlTelInput from "react-intl-tel-input";
import {InputGroup, Spinner} from "reactstrap";
import {AuthContext} from "../../context/auth";
import { PinInput } from 'react-input-pin-code';
import {Lock} from "react-feather";

const Resetpass =()=>{
    const [loginState, setLoginState] = useState({
        phone:"",

    })
    const [singUpState, setSingUpState] = useState({
        password:"",
        confPassword:""
    });
    const {isLoaderUser,
        getOpt,
        isSendOpt,
        confirmOpt,
        userDataConfirm,
        values,
        setValues,
        getOptNew,
        changePass,
        isSetpass,
        openModalAuth
    } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(false);

    return(
        <div className="container">
            {
                isSendOpt
                    ?
                        userDataConfirm
                        ?
                            isSetpass
                            ?
                                <div className="d-flex align-items-center justify-content-center flex-column">
                                    <div className="col-12 col-xl-6 col-lg-6  row container py-3">
                                        <div className="col-12 col-xl-6 col-lg-6  row container">
                                            <span>Modifier avec Success</span>
                                        </div>

                                        <div className="col-12 mt-3 ">
                                            <div className=" p-1 col-12 ">
                                                <InputGroup>
                                                        <button className="col-12 col-xl-6 col-lg-6 btn btn-dark" onClick={openModalAuth}>Connexion</button>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                            <div className="d-flex align-items-center justify-content-center flex-column">
                        <div className="col-12 col-xl-6 col-lg-6  row container py-3">
                            <div className="col-12 col-xl-6 col-lg-6  row container">
                                <span>Entrez le nouveau votre mot de passe </span>
                            </div>
                            <div className="col-12 mt-3 ">
                                <div className=" p-1 col-12 ">
                                    <div className="PhoneInputCont2 ">
                                        <InputGroup>
                                            <div className="col-2">
                                                <Lock/>
                                            </div>
                                            <input type={showPass ? "text" : "password"} className="inputMy col-10" placeholder="Nouveau mot de passe"
                                                   onChange={e => setSingUpState({
                                                       ...singUpState,
                                                       password: e.target.value
                                                   })}
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3 ">
                                <div className=" p-1 col-12 ">
                                    <div className="PhoneInputCont2 ">
                                        <InputGroup>
                                            <div className="col-2">
                                                <Lock/>
                                            </div>
                                            <input type={showPass ? "text" : "password" } className="inputMy col-10" placeholder="Confirmez le nouveau Mot de passe"
                                                   onChange={e => setSingUpState({
                                                       ...singUpState,
                                                       confPassword: e.target.value
                                                   })}
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3 ">
                                <div className=" p-1 col-12 ">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <span>Afficher le mot de passe</span>
                                        <input
                                            value={false}
                                            onChange={e=>{
                                                setShowPass(e.target.checked)
                                            }}
                                            aria-label="Checkbox for following text input"
                                            type="checkbox"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3 ">
                                <div className=" p-1 col-12 ">
                                    <InputGroup>{
                                        !isLoaderUser
                                            ?
                                            <button className="col-12 btn btn-dark" onClick={()=>changePass(singUpState.password,singUpState.confPassword)}>Modifier</button>
                                            :
                                            <div className="col-12 text-center flex justify-content-center align-items-center">
                                                <Spinner>...Loader</Spinner>
                                            </div>}
                                    </InputGroup>
                                </div>
                            </div>

                        </div>
                            </div>

                        :

                        <div className="d-flex align-items-center justify-content-center flex-column">
                        <div className="col-12 col-xl-6 col-lg-6  row container py-3">
                            <span>Entrez le code  de Confirmation recuperer votre mot de passe </span>
                            <div className="col-12 col-xl-6 col-lg-6  row container py-3">
                                <div className="col-12 ">
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xl-6 col-lg-6  row container py-3">
                                <PinInput
                                    values={values}
                                    placeholder="X"
                                    onComplete={values => confirmOpt(values)}
                                    onChange={(value, index, values) => setValues(values)}
                                />


                            </div>
                            <div className="col-12 mt-3 ">
                                <div className=" p-1 col-12 ">
                                    <InputGroup>{
                                        !isLoaderUser
                                            ?
                                            <button className="col-12 col-xl-6 col-lg-6 btn btn-dark" onClick={() => {
                                                getOpt(loginState.phone)
                                            }}>Envoyer le code</button>
                                            :
                                            <div
                                                className="col-12 text-center flex justify-content-center align-items-center">
                                                <Spinner>...Loader</Spinner>
                                            </div>}
                                    </InputGroup>
                                </div>
                            </div>
                        </div>


                    </div>
                    :
                <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="col-12 col-xl-6 col-lg-6  row container py-3">
                    <span>Entrez votre numéro de téléphone pour recuperer votre mot de passe </span>
                    <div className="col-12 col-xl-6 col-lg-6  row container py-3">
                        <div className="col-12 ">
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6 col-lg-6  row container py-3">
                    <div className="col-12 ">
                        <div className="PhoneInputCont">
                            <IntlTelInput
                                containerClassName="intl-tel-input col-12"
                                inputClassName="form-control col-12"
                                defaultCountry="cd"
                                autoFocus={true}
                                onPhoneNumberChange={(isValid, value, selectedCountryData, fullNumber, extension) => {
                                    console.log("full num", fullNumber)
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
                            <InputGroup>{
                                !isLoaderUser
                                    ?
                                    <button className="col-12 col-xl-6 col-lg-6 btn btn-dark" onClick={() => {
                                        getOptNew()
                                    }}>Envoyer</button>
                                    :
                                    <div className="col-12 text-center flex justify-content-center align-items-center">
                                        <Spinner>...Loader</Spinner>
                                    </div>}
                            </InputGroup>
                        </div>
                    </div>
                </div>


            </div>}
        </div>
    )
}

export default Resetpass;
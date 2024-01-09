import React, {useEffect} from "react";
import Footer from "../../Components/global/footer";
import {Container} from "reactstrap";
import {Mail, PhoneCall} from "react-feather";
// import logo from "../../images/logos/3.PNG"
const Apropos=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return(
        <div >
            <Container>
                <div className="container mt-5">

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-7">

                            <div className="card p-3 py-4">

                                {/* <div className="text-center">
                                    <img src={logo} width="100" className="rounded-circle"/>
                                </div> */}

                                <div className="text-center mt-3">
                                    <h5 className="mt-2 mb-0">MUDAMARKET</h5>
                                    <div className="px-4 mt-1">
                                        <p className="fonts">
                                            MUDA MARKET PRESENTATION
                                            Muda Market est une entreprise de commerce œuvrant dans la vente des marchandises et
                                            dans l’organisation des évènements (concerts, fete, conferences etc.).
                                            Dans sa rubrique vente Muda Market met à votre disposition plusieurs marchandises :
                                            ordinateurs et leurs accessoires, téléphones et accessoires téléphones, télévision ainsi
                                            qu’autre accessoires. Muda Market vous donne la possibilité de faire des réservations et
                                            achats en ligne à des prix très abordables.
                                            Dans sa rubrique organisation des évènements, Muda Market offre des services de location
                                            lumières de scène, des stands lumières, podium ainsi que la conception d’ordre
                                            organisationnel.
                                            Muda market est situé au centre-ville – Quartier le volcan.
                                        </p>

                                    </div>

                                    <ul className="social-list">
                                        <li><Mail/></li>
                                        <li><span>mudamarket01@gmail.com</span></li>
                                    </ul>

                                    <ul className="social-list">
                                        <li><PhoneCall/></li>
                                        <li><span>+243991122903</span></li>
                                    </ul>




                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </Container>
            <Footer/>
        </div>
    )
}
export default Apropos;
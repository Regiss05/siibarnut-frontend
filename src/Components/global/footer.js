import React from "react";
import logo from "../../images/logos/4.JPG"
import {Facebook, Instagram, Phone, Twitter} from "react-feather";
import playstore from "../../images/ulistartion/android.svg"
import appstore from "../../images/ulistartion/ios.svg"
import {Email} from "@material-ui/icons";
 const Footer=()=>{
     return(
         <footer>
             <div className="container">
                 <div className="row">
                     <div className="col-md-4 footer-column">
                         <ul className="nav flex-column">
                             <li className="nav-item  mb-3">
                                 <span className="footer-title">Apropo de nous</span>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="#">Product 1</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="#">Product 2</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="#">Plans & Prices</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="#">Frequently asked questions</a>
                             </li>
                         </ul>
                     </div>
                     <div className="col-md-4 footer-column">
                         <ul className="nav flex-column">
                             <li className="nav-item  mb-3">
                                 <span className="footer-title">Nos App</span>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="#">
                                     <img src={playstore} alt="imagestore" />
                                 </a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="#">
                                     <img src={appstore} alt="imagestore" />
                                 </a>
                             </li>
                         </ul>
                     </div>
                     <div className="col-md-4 footer-column">
                         <ul className="nav flex-column ">
                             <li className="nav-item mb-3">
                                 <span className="footer-title">Contact & Support</span>
                             </li>
                             <li className="nav-item">
                                 <span className="nav-link"><Phone className="icpneFooter"/>+243972673616</span>
                             </li>
                             <li className="nav-item mt-1">
                                 <a className="nav-link" href="#"><Email className="icpneFooter"/>Contact us</a>
                             </li>
                         </ul>
                     </div>
                 </div>

                 <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>

                 <div className="row text-center">
                     <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright &copy; Webmaster019 {new Date().getFullYear()}
        </span>
                     </div>
                     <div className="col-md-4 box">
                         <ul className="list-inline social-buttons">
                             <li className="list-inline-item">
                                 <a href="#">
                                     <i className="fab fa-twitter"></i>
                                 </a>
                             </li>
                             <li className="list-inline-item">
                                 <a href="#">
                                     <i className="fab fa-facebook-f"></i>
                                 </a>
                             </li>
                             <li className="list-inline-item">
                                 <a href="#">
                                     <i className="fab fa-linkedin-in"></i>
                                 </a>
                             </li>
                         </ul>
                     </div>
                     <div className="col-md-4 box">
                         <ul className="list-inline quick-links">
                             <li className="list-inline-item">
                                 <a href="#">Privacy Policy</a>
                             </li>
                             <li className="list-inline-item">
                                 <a href="#">Terms of Use</a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </footer>
     )
 }
 export default Footer;
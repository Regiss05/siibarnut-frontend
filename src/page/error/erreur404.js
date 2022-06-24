import React from "react";
import "../../Styles/errorStyle.css"
import {ReactComponent as Notfound} from "../../images/ulistartion/nf4.svg";
import {Link} from "react-router-dom";

const Erreur404=()=>{
    return(
        <div className="container-error">
            <Notfound/>
            <div>
                <h2>404</h2>
            </div>
            <div>
                <Link to="/">Retournez à l'accueil</Link>
            </div>
        </div>
    )
}
export default Erreur404;
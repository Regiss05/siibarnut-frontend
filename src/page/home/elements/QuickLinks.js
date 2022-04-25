import React from 'react';
import '../../../Styles/QuickLinks.css';
import JumiaMall from '../../../images/JumiaMall.png';
import JumiaGlobal from '../../../images/JumiaGlobal.png';
import { Globe, Lock} from "react-feather";


function QuickLinks() {
  const links = (Icon, text) => (
    <div className="quickLinksOptions col-3">
      {Icon}
      <h2>{text}</h2>
    </div>
  )
  return (
      <div className="container p-2  ">
          <div className="row mt-4">
    <div className="quickLinksContainer col-12">
      {links(<img src={JumiaMall} alt="imgt"/>, 'Boutique Officielle')}
      {links(<img src={JumiaGlobal} alt="imgt"/>, 'Livraison à domicile')}
      {links(<div className="iconcont2"><Globe size={30} color="#fff"/></div>, 'Support 24/24')}
        {links(<div className="iconcont"><Lock size={30} color="#fff"/></div>, 'Paiement  sécurisé')}
    </div>
          </div>
      </div>
  )
}

export default QuickLinks

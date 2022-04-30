import React from 'react';
import '../../Styles/HeaderOptionLeft.css';

function HeaderOptionLeft({ Icon, title, DropIcon }) {
  return (
    <div className="HeaderOptionLeftContainer">
      {Icon && <Icon className="headerOptionIcon" />}
      {DropIcon && (<DropIcon className="headerOptionDropIcon" />)}
    </div>
  )
}

export default HeaderOptionLeft

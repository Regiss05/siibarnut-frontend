import React from 'react';
import '../../../Styles/TopSection.css';
import MiddleTop from './MiddleTop';
import RightTop from "./RightTop";

function TopSection() {
  return (
    <div className="container p-1 pt-0  ">
        <div className="row ">
      <MiddleTop />
            <RightTop/>
        </div>
    </div>
  )
}

export default TopSection

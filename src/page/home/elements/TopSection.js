import React from 'react';
import '../../../Styles/TopSection.css';
import LeftTop from './LeftTop';
import MiddleTop from './MiddleTop';
import RightOptions from "./RightOptions";
import RightTop from "./RightTop";

function TopSection() {
  return (
    <div className="container p-2  ">
        <div className="row mt-4">
      <MiddleTop />
            <RightTop/>
        </div>
    </div>
  )
}

export default TopSection

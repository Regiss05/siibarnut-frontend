import React from 'react';
import '../../../Styles/TopSection.css';
import LeftTop from './LeftTop';
import MiddleTop from './MiddleTop';

function TopSection() {
  return (
    <div className="container p-2  ">
        <div className="row mt-4">
            <LeftTop/>
      <MiddleTop />
        </div>
    </div>
  )
}

export default TopSection

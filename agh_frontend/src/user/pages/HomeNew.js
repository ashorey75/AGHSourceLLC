import React from "react";

import './HomeNew.css';

const HomeNew = () => {
  return (
    <React.Fragment>
        <div className="home">
          <div className="banner">
            <img src='/fashion_ave.jpg' alt="street sign"/>
          </div>
          <div className="about-us" >
            <h1 className="about-us">ABOUT US</h1>
            <p className="about-us"><span>AGH Trimsource, Inc. manufactures fashion zippers for some of the best apparel brands and retailers worldwide since 1897.  
              Our factories offer the most up to date technology allowing for quick reaction to market and fashion trends.  
              We maintain a full sample zipper inventory providing swift availability of design and production samples.  
              Our accumulated experience with all zipper products and their applications proves to be invaluable in planning your fastening needs.  
              </span><vr></vr><span>If your requirements call for a ZIPPER, AGH offers the VALUE of high quality products, competitive pricing, and worldwide accessibility.

We pride ourselves in being a full service zipper supplier. 
We are strategically positioned to provide assitance in most all manufacturing locations.</span></p>
          </div>
        </div>
    </React.Fragment>
  );
};

export default HomeNew;

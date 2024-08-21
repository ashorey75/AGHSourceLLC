import React, { useEffect, useState } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

import './ContactUs.css';
import Map from "../../shared/components/UIElements/Map";
import Card from "../../shared/components/UIElements/Card";

const ContactUs = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      {/* !isLoading && loadedUsers && */}
        <div className="home">
          <div className="banner">
            <img src='/lower_manhattan.jpg' alt="Downtown Manhattan"/>
          </div>
          <div className="contact-us" >
            <h1 className="about-us">CONTACT US</h1>
            <div className="contact-us">
              <span>
                <div className="map-container">
                  {/* <Map center = {{lat: 40.754294, lng:-73.9963008}} zoom={16} /> */}
                </div>
                <p>Address: 327 W 36th St. 11th Floor</p>
                <p>New York, NY 10018</p>
              </span>
              <span>
                <p id="test">Email: COMING SOON!</p>
              </span>
              <span>
                <p>Phone: 212-643-7300</p>
              </span>
              <span>
                <p>Hours of Operation: M-F 9:00AM - 5:00PM EST</p>
              </span>
            </div>
          </div>
        </div>
      {/*}*/}
    </React.Fragment>
  );
};

export default ContactUs;

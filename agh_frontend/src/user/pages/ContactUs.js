import React, { useEffect, useState } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

import './ContactUs.css';
import Map from "../../shared/components/UIElements/Map";
import Card from "../../shared/components/UIElements/Card";

const ContactUs = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    //useEffect does not love the idea of a promise so it makes more sense to
    //create a function inside that can use async
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        ); // fetch by default will use a get request and we dont need any headers since we arent sending data

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading && loadedUsers && 
        <div className="home">
          <div className="banner">
            <img src='/lower_manhattan.jpg' alt="Downtown Manhattan"/>
          </div>
          <div className="contact-us" >
            <h1 className="about-us">CONTACT US</h1>
            <div className="contact-us">
              <span>
              <div className="map-container">
               
          <Map center = {{lat: 40.754294, lng:-73.9963008}} zoom={16} />
        </div>
                
                <p>Address: 327 W 36th St. 11th Floor</p>
                <p>New York, NY 10018</p>
              </span>
              <span>
                <p id="test">Email: sales@ahgsource.com</p>
              </span>
              <span>
                <p>Phone: ###-###-####</p>
              </span>
              <span>
                <p>Hours of Operation: M-F 9:00AM - 5:00PM EST</p>
              </span>

            </div>

          </div>

        </div>
      }
    </React.Fragment>
  );
};

export default ContactUs;

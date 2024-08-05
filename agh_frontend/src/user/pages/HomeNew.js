import React, { useEffect, useState } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

import './HomeNew.css';

const HomeNew = () => {
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
      }
    </React.Fragment>
  );
};

export default HomeNew;

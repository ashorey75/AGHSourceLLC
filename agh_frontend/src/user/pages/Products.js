import React, { Fragment, useEffect, useState } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Card from "../../shared/components/UIElements/Card";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Users = () => {
  const { category } = useParams();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    //useEffect does not love the idea of a promise so it makes more sense to
    //create a function inside that can use async
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/${category}`
        ); // fetch by default will use a get request and we dont need any headers since we arent sending data

        setLoadedUsers(responseData);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest, category]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}

        {!isLoading && loadedUsers.map(prod =>  (
          <Fragment>
            <Card className='zipper-container'>
              <div className='zipper-element'>
                <img src={prod.image || "/fashion_ave.jpg"} alt={prod.tile}/>
              </div>
              <div className='zipper-text'>
                <h2>{prod.title}</h2>
                <p>{prod.description}</p>
              </div>
            </Card>
          </Fragment>
        ))};
    </React.Fragment>
  );
};

export default Users;

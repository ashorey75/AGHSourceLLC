/*import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { useHttpClient } from "../../shared/hooks/http-hook";
import './Boroughs.css'
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Boroughs = () => {
  const DUMMY_BOROUGHS = [
    { id: "b1", name: "Manhattan", image: "" },
    {
      id: "b2",
      name: "Brooklyn",
      image: "",
    },
    {
      id: "b3",
      name: "Queens",
      image: "",
    },
  ];
  const { isLoading, error, clearError } = useHttpClient();



  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner />}
      <ErrorModal error={error} onClear={clearError}/>
      {DUMMY_BOROUGHS.map( place => {
        return(
        <Card className="borough" key={place.id} id={place.id} >
          <Link to={`/places/boroughs/${place.name}`} >
          <div >
            <h2> {place.name}</h2>
          </div></Link>
        </Card>
      )})}
    </React.Fragment>
  );
};

export default Boroughs;
*/
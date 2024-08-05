import React from "react";
import './WorkInProgress.css'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const WIP = () => {
  return (
    <div className="wip-container"> 
       
      <div className="fa-solid fa-cloud-moon">
        <h4>Work in Progress...</h4>
        <NavLink className="return" to='home' exact>Return to homepage</NavLink>
      </div>
    </div>

    
  )
}

export default WIP;
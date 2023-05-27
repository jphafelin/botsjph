import React, { useState } from "react";

import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"





export const Home = () => {

  const navigate = useNavigate();


  return (
    <div className="containter justify-content-center">
      <nav className="navbar p-1">
        <div className="container-fluid row">
          <div className="col-2">
            <Link to="/menu">
              <img src={logo} height="60px"></img>
            </Link>
          </div>
          <div className="col-8 text-center justify-content-start ">
            <h3>HOMES</h3>
          </div>
          <div className="col-2 text-end">
            
            <div>
              
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>


      </nav>





    




    </div>
  );
};

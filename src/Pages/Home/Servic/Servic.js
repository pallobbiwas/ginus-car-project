import React from "react";
import "./Servic.css";

const Servic = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="service-container col-md-4 servic">
      <div className="servic">
        <img className="w-75 img-fluid" src={img} alt="" />
        <h3>{name}</h3>
        <p>price: {price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button>books this service</button>
      </div>
    </div>
  );
};

export default Servic;

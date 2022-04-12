import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Servic.css";

const Servic = ({ service }) => {
  const { name, price, description, img, id } = service;
  const navigate = useNavigate();
  const detailsbtn = (id) => {
    navigate(`/service/${id}`)
  }
  return (
    <div className="service-container col-md-4 servic">
      <div className="servic">
        <img className="w-75 img-fluid" src={img} alt="" />
        <h3>{name}</h3>
        <p>price: {price}</p>
        <p>
          <small>{description}</small>
        </p>
        <Button onClick={()=>detailsbtn(id)} variant="primary">Books this package</Button>
      </div>
    </div>
  );
};

export default Servic;

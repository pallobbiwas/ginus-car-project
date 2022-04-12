import React, { useEffect, useState } from "react";
import Servic from "../Servic/Servic";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("car.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="service" className="container-fluid text-center">
      <div className="my-5">
        <h1 style={{ textAlign: "center", color: "blue" }}> Our services</h1>
        <hr />
      </div>
      <div className="row g-2 container-fluid">
        {services.map((service) => (
          <Servic key={service.id} service={service}></Servic>
        ))}
      </div>
    </div>
  );
};

export default Services;

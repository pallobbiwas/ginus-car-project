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
    <div>
      <h1 style={{textAlign: 'center', color:'blue'}}> Our services</h1>
      <hr />
      <div className="services-container">
        {services.map((service) => (
          <Servic key={service.id} service={service}></Servic>
        ))}
      </div>
    </div>
  );
};

export default Services;

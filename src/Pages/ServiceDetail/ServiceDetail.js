import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>welcome to details</h1>
      <div className="d-flex justify-content-center">
        <Link to="/cheekout">
          {" "}
          <button className="btn btn-info"> please proccet</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

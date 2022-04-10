import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";
import "./Experts.css";

const Experts = () => {
  const experts = [
    { id: 1, name: "mr.sejex", img: expert1 },
    { id: 2, name: "mr.pada", img: expert2 },
    { id: 3, name: "mr.cagol", img: expert3 },
    { id: 4, name: "mr.garu", img: expert4 },
    { id: 5, name: "mr.vera", img: expert5 },
    { id: 6, name: "mr.mohis", img: expert6 },
  ];
  return (
    <div className="container-fluid mx-auto">
      <h2 className=" text-center">Our experts</h2>
      <hr />
      <div className="row">
        {experts.map((expart) => (
          <Expert 
          key={expart.id} 
          expert={expart}
          ></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;

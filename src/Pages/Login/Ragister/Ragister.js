import React from "react";
import { Link } from "react-router-dom";
import "./Ragister.css";

const Ragister = () => {
    const handelRagister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;



    }
  return (
    <div className="text-center container-fluid w-50 my-5 full-height">
      <div className="mb-5">
        <h1>please raguster here</h1>
        <hr />
      </div>
      <>
        <form onSubmit={handelRagister} className="from-container my-5">
          <input type="text" name="name" id="" placeholder="your name" />
          <input
            type="email"
            name="email"
            id=""
            placeholder="email address"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
          <div className="ragisterbtn">
            <input type="submit" value="Ragister" />
          </div>
        </form>
        <p className="text-end">Already have account? <Link to='/login'>login here</Link> </p>
      </>
    </div>
  );
};

export default Ragister;

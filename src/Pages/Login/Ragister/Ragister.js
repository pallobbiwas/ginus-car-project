import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Ragister.css";

const Ragister = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [agree, setAgree] = useState("");

  const handelRagister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password, name);
    await updateProfile({ displayName: name });
    alert("Updated profile");
    navigate("/");
  };
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
          <div className="d-flex align-items-center my-3">
            <input
              onClick={() => setAgree(!agree)}
              className="me-2"
              type="checkbox"
              name="tarms"
              id="tarms"
            />
            <label
              className={agree ? "text-primary" : "text-danger"}
              htmlFor="tarms"
            >
              accept tarms & condition
            </label>
          </div>
          <div className="ragisterbtn">
            <input
              className={
                agree
                  ? "bg-primary w-100 rounded text-white"
                  : "bg-dark rounded text-white"
              }
              disabled={!agree}
              type="submit"
              value="Ragister"
            />
          </div>
        </form>
        <p className="text-end">
          Already have account? <Link to="/login">login here</Link>
        </p>
      </>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Ragister;

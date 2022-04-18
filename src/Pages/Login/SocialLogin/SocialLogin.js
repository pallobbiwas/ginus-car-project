import React from "react";
import {
    useSignInWithGithub,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import google from "../../../images/googleg_standard_color_64dp.png";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="line-container mb-4">
        <div className="left-container"></div>
        <p>or</p>
        <div className="right-container"></div>
      </div>
      {errorElement}
      <div className="btn-container">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info width me-3"
        >
          <img className="img-width img-fluid" src={google} alt="" />
          Google login
        </button>
        <button className="btn btn-info width">
          <img className="img-width img-fluid" src={facebook} alt="" />
          Facebook login
        </button>
      </div>
      <div>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-100 mt-4"
        >
          <img className="img-width img-fluid rounded-3" src={github} alt="" />
          Log in with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

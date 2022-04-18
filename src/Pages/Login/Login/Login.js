import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let erreorElement;

  const from = location?.state?.from?.pathname || "/";

  // take value by using react hook useRef
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const formSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    signInWithEmailAndPassword(email, pass);
  };
  //ragister toggol

  const ragisterbtn = () => {
    navigate("/ragister");
  };
  //forget password
  const forgetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("send password");
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    erreorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  return (
    <div className="container w-50 my-2 mx-auto">
      <Helmet>
        <title>login-genius car service</title>
      </Helmet>
      <h1 className="text-center">Log in</h1>
      <hr />
      <>
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary w-50 mx-auto d-block my-3" type="submit">
            Login
          </Button>
        </Form>
        {erreorElement}
        <div className="d-flex justify-content-center">
          <p className="text-end me-4">
            new to car? <span onClick={ragisterbtn}>ragister here</span>{" "}
          </p>
          <p className="text-end">
            forgot password?{" "}
            <span onClick={forgetPassword}>rset your password</span>{" "}
          </p>
        </div>
      </>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;

import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state.from.pathname || '/'
  // take value by using react hook useRef
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const formSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    signInWithEmailAndPassword(email, pass)
  };
  //ragister toggol
 
  const ragisterbtn = () => {
    navigate("/ragister");
  };
  if(user){
    navigate(from);
  }
  return (
    <div className="container w-50 my-2 mx-auto">
      <h1 className="text-center">Log in</h1>
      <hr />
      <>
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="text-end">
          new to car? <span onClick={ragisterbtn}>ragister here</span>{" "}
        </p>
      </>
    </div>
  );
};

export default Login;

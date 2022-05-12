import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SingUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  // firebase hoook auth
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  //Login handel function
  const handelLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };
  let errorElementEmail;
  if (error) {
    errorElementEmail = <p className='text-danger'>Error : {error?.message}</p>;
  }
  if (user) {
    navigate("/");
  }
  return (
    <div className='container w-100 mx-auto row justify-content-md-center py-5'>
      <div className='col-md-12 col-lg-6'>
        <SocialLogin></SocialLogin>
        <h1>Please Sign Up</h1>
        <Form onSubmit={handelLogin}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type='email'
              placeholder='Enter email'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type='password'
              placeholder='Password'
              required
            />
          </Form.Group>
          {errorElementEmail}
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SingUp;

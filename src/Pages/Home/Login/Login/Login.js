import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // firebase hoook auth
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  //Login handel function
  const handelLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  let errorElementEmail;
  if (error) {
    errorElementEmail = <p className='text-danger'>Error : {error?.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className='container-lg w-100 mx-auto row justify-content-md-center py-5 '>
      <div className='col-md-12 col-lg-6'>
        <SocialLogin></SocialLogin>
        <h1 className='textPrimary'>Login Your Account</h1>

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
          <Button className='bgPrimary' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <p>
          If Not Register ?{" "}
          <Link className='text-decoration-none textPrimary' to='/singup'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

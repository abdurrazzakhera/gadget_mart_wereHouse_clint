import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../../Shared/Loading/Loading";

const SingUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const navigate = useNavigate();

  // firebase hoook auth
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //Login handel function
  const handelLogin = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);

    updateProfile({ displayName: name });
    console.log("Updated profile");
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }
  let errorElementEmail;
  if (error || updateError) {
    errorElementEmail = <p className='text-danger'>Error : {error?.message}</p>;
  }

  if (user) {
    navigate("/");
  }
  return (
    <div className='container w-100 mx-auto row justify-content-md-center py-5'>
      <div className='col-md-12 col-lg-6'>
        <SocialLogin></SocialLogin>
        <h1 className='textPrimary'>Please Sign Up</h1>
        <Form onSubmit={handelLogin}>
          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type='text'
              placeholder='Enter Your Name'
              required
            />
          </Form.Group>
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
          <p className='mt-2'>
            If Register Already ?{" "}
            <Link className='text-decoration-none textPrimary' to='/login'>
              Log In
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SingUp;

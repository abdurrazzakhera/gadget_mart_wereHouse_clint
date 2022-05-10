import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

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
    <div className='container w-50 mx-auto'>
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
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
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
  );
};

export default SingUp;

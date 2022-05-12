import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleLogo from "../../../../images/socialIcon/google.png";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <Button
        className='d-flex justify-content-center  rounded-pill bg-light text-secondary fs-5 fw-bolder mb-3 btn-custom'
        onClick={() => signInWithGoogle()}
      >
        <img style={{ height: "30px" }} src={googleLogo} alt='' />
        <span style={{ marginLeft: "5px" }}>Continue With Google</span>
      </Button>
      <div className='borderOr mb-3'>
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      {errorElement}
    </div>
  );
};

export default SocialLogin;

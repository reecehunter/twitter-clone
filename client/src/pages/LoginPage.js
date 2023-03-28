import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const submitCallback = (e) => {
    e.preventDefault();
    // Log the user in
  };

  return (
    <>
      <h1 className="text-center">Log In</h1>
      <LoginForm submitCallback={(e) => submitCallback(e)} />
    </>
  );
};

export default LoginPage;

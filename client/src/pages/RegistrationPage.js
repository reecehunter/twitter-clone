import React from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const submitCallback = (e) => {
    e.preventDefault();
    // Submit the form
  };

  return (
    <>
      <h1 className="text-center">Create an Account</h1>
      <RegistrationForm submitCallback={(e) => submitCallback(e)} />
    </>
  );
};

export default RegistrationPage;

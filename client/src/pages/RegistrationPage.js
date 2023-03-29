import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const submitCallback = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users", {
        displayName: e.target[0].value,
        username: e.target[1].value,
        password: e.target[2].value,
      })
      .then((res) => {
        localStorage.setItem("user", res.data);
        navigate("/home");
      })
      .catch((err) => {
        const errorRes = err.response.data.errors;
        const errorMessageArray = [];
        for (const key in errorRes) errorMessageArray.push(errorRes[key].message);
        setErrors(errorMessageArray);
      });
  };

  return (
    <>
      <h1 className="text-center mt-5">Create an Account</h1>
      {/* {errors.map((error, index) => (
        <p key={index} className="text-danger">
          {error}
        </p>
      ))} */}
      <RegistrationForm submitCallback={(e) => submitCallback(e)} />
    </>
  );
};

export default RegistrationPage;

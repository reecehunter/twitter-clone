import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const submitCallback = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", { username: e.target[0].value, password: e.target[1].value })
      .then((res) => {
        localStorage.setItem("user", res.data);
        navigate("/home");
      })
      .catch((err) => {
        setErrors(["Invalid login credentials."]);
      });
  };

  return (
    <>
      <h1 className="text-center mt-5">Log In</h1>
      {errors.map((error, index) => (
        <p key={index} className="text-danger">
          {error}
        </p>
      ))}
      <LoginForm submitCallback={(e) => submitCallback(e)} />
    </>
  );
};

export default LoginPage;

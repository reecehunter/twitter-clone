import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const RegistrationForm = (props) => {
  const { submitCallback } = props;
  const [formData, setFormData] = useState({ displayName: "", username: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errorArray = [];
    if (formData.displayName.length < 3) errorArray.push("Display name must be more than 3 characters!");
    if (formData.username.length < 3) errorArray.push("Username must be more than 3 characters!");
    if (formData.password.length < 7) errorArray.push("Password must be more than 7 characters!");
    if (formData.confirmPassword !== formData.password) errorArray.push("Passwords must match!");
    setErrors(errorArray);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="reg-form">
      <Form onSubmit={(e) => submitCallback(e)}>
        {errors.map((error, index) => (
          <p key={index} className="text-danger mb-3">
            {error}
          </p>
        ))}
        <Form.Group className="mb-3">
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="text" name="displayName" placeholder="Enter a display name" onChange={(e) => handleChange(e)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter a username" onChange={(e) => handleChange(e)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter a password" onChange={(e) => handleChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirmPassword" placeholder="Confirm your password" onChange={(e) => handleChange(e)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Account
        </Button>

        <Form.Text className="text-muted d-block mt-3">
          Already have an account? <Link to="/login">Log in</Link>.
        </Form.Text>
      </Form>
    </div>
  );
};

export default RegistrationForm;

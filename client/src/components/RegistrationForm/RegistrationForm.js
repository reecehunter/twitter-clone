import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const RegistrationForm = (props) => {
  const { submitCallback } = props;

  return (
    <div className="reg-form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="displayName" placeholder="Enter a display name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter a username" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter a password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="confirmPassword" placeholder="Confirm your password" />
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

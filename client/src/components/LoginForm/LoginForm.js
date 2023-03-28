import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const { submitCallback } = props;

  return (
    <div className="reg-form">
      <Form onSubmit={submitCallback}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter a username" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter a password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>

        <Form.Text className="text-muted d-block mt-3">
          Don't have an account? <Link to="/register">Create one</Link>.
        </Form.Text>
      </Form>
    </div>
  );
};

export default LoginForm;

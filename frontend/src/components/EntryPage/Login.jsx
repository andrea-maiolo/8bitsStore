import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.length == 0 || password.length == 0) {
      event.stopPropagation();
    }

    const form = {
      userE: email,
      userP: password,
    };

    console.log(form, "fare fetch");
  };

  return (
    <div className="d-flex  justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="emailInput" className="mb-2">
          <Form.Label className="m-0">Email</Form.Label>
          <Form.Control required type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="passwordInput" className="mb-2">
          <Form.Label className="m-0">Password</Form.Label>
          <Form.Control required type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

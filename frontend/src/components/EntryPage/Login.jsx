import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const fetchLogin = async function (form) {
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const r = await response.json();
        console.log(r);
        throw new Error("to be defined");
      }

      const data = response.json();
      console.log(data);
      return data;
    } catch (error) {
      //errors and loadings can be moved to redux
      setError(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.length == 0 || password.length == 0) {
      event.stopPropagation();
    }

    const form = {
      email: email,
      password: password,
    };

    console.log(form);

    fetchLogin(form);
  };

  if (error) {
    return (
      <div>
        <p>sorry there was an error </p>
      </div>
    );
  }

  return (
    <div className="d-flex  justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="emailInput" className="mb-2">
          <Form.Label className="m-0">Email</Form.Label>
          <Form.Control required type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="passwordInput" className="mb-2">
          <Form.Label className="m-0">Password</Form.Label>
          <Form.Control required type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

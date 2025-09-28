import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Register = function () {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nameInput" className="mb-2">
          <Form.Label className="m-0">Name</Form.Label>
          <Form.Control required type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="surnameInput" className="mb-2">
          <Form.Label className="m-0">Surname</Form.Label>
          <Form.Control required type="text" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="emailInput" className="mb-2">
          <Form.Label className="m-0">Email</Form.Label>
          <Form.Control required type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="passwordInput" className="mb-2">
          <Form.Label className="m-0">Password</Form.Label>
          <Form.Control required type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;

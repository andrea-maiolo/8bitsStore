import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Register = function () {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const fetchRegister = async function (form) {
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const r = await response.json();
        console.log(response);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length == 0 || password.length == 0 || name.length == 0 || surname.length == 0) {
      e.stopPropagation();
    }

    const form = {
      name: name,
      surname: surname,
      password: password,
      email: email,
    };

    console.log(form, "fare fetch");

    fetchRegister(form);
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
          <Form.Control required type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;

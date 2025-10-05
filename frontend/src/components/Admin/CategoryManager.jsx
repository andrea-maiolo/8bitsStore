import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CategoryManager = function () {
  const [inputCategory, setInputCategory] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [categoriesFromDb, setCategoriesFromDb] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async function () {
    try {
      const res = await fetch("http://localhost:3001/category", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("error while fetching categories");
      }

      const data = await res.json();
      setCategoriesFromDb(data);
      console.log(categoriesFromDb);
    } catch (error) {
      console.log(error);
    }
  };

  const createCategory = async function () {
    try {
      const response = await fetch("http://localhost:3001/category/new", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name: inputCategory }),
      });

      if (!response.ok) {
        throw new Error("error with the creation");
      }

      if (response.status == 201) {
        setConfirmation("All done, the new category has been added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    createCategory();
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p>Create a new category</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Set a name for your category</Form.Label>
                <Form.Control type="text" placeholder="Enter category name" value={inputCategory} onChange={(e) => setInputCategory(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>{confirmation}</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {categoriesFromDb.map((cat) => (
            <Col key={cat.name}>{cat.name}</Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CategoryManager;

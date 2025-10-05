import { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { RxUpdate } from "react-icons/rx";

const CategoryManager = function () {
  const [inputCategory, setInputCategory] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [categoriesFromDb, setCategoriesFromDb] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryChange, setCategoryChange] = useState("");

  const handleClose = () => {
    setSelectedCategory(null);
    setShow(false);
  };

  const handleShow = (category) => {
    setSelectedCategory(category);
    setShow(true);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async function () {
    console.log("running");
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
        getAllCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async function (category) {
    try {
      const response = await fetch(`http://localhost:3001/category/${category.catId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("error with the creation");
      }

      if (response.status == 204) {
        setConfirmation("All done, the category has been deleted");
        getAllCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async function () {
    try {
      console.log(categoryChange);
      const response = await fetch(`http://localhost:3001/category/${selectedCategory.catId}/update`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: categoryChange }),
      });

      if (!response.ok) {
        const r = await response;
        console.log(r);
        throw new Error("error with the creation");
      }

      if (response.status == 204) {
        setConfirmation("All done, the category has been deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    createCategory();
  };

  const handleDeleteCategory = function (category) {
    console.log(category);
    deleteCategory(category);
  };

  const handleUpdateCategory = function () {
    updateCategory();
    handleClose();
    getAllCategories();
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
          {categoriesFromDb == null ? (
            <div>loading</div>
          ) : (
            categoriesFromDb.map((cat) => (
              <Col key={cat.catId} className="mt-2 d-flex align-items-center w-50">
                <Badge>{cat.name}</Badge>
                <TiDelete size="1.5em" onClick={() => handleDeleteCategory(cat)} />
                <RxUpdate onClick={() => handleShow(cat)} />
              </Col>
            ))
          )}
        </Row>
      </Container>

      {/* modal update */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit category {selectedCategory ? selectedCategory.name : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="updateCategory">
              <Form.Label>Change category name</Form.Label>
              <Form.Control type="text" placeholder="Enter category name" value={categoryChange} onChange={(e) => setCategoryChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryManager;

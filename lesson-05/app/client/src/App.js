import React from "react";
import { Button, Container, Form } from "react-bootstrap";

function App() {
  const onSubmitNewItem = (event) => {
    event.preventDefault();
    console.log("SUBMIT clicked");
  };

  const onSearch = (event) => {
    event.preventDefault();
    console.log("SEARCH clicked");
  };

  return (
    // Placeholder UI - to be replaced in later steps
    <Container>
      <div className="d-flex align-items-center gap-2 mb-3">
        <h1 className="m-0">User Finder</h1>
      </div>
      <Container className="add-form border rounded p-3 mb-3">
        <h2>Add a new User's Account</h2>

        <Form onSubmit={onSubmitNewItem}>
          <Form.Group className="mb-3">
            <Form.Label>User's username</Form.Label>
            <Form.Control placeholder="e.g. CoolUser123" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>User's game level</Form.Label>
            <Form.Control placeholder="e.g. 12" />
          </Form.Group>
          <Button className="mt-2" type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Container>
      <Container className="search-form border rounded p-3">
        <h2>Search by username</h2>
        <Form onSubmit={onSearch}>
          <Form.Group className="mb-3">
            <Form.Label>User's username</Form.Label>
            <Form.Control placeholder="e.g. awesomeMan5432" />
          </Form.Group>
          <Button className="mt-2" type="submit" variant="success">
            Search
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default App;

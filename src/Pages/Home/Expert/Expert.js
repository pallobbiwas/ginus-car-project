import React from "react";
import { Button, Card } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="g-2 col-sm-12 col-md-6 col-lg-4 mx-auto">
      <Card>
        <Card.Img className="img-fluid w-75 mx-auto" variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Button variant="primary">Click to contuct</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Expert;

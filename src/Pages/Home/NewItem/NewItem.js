import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewItem = ({ newItem }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant='top' src={newItem.img} />
        <Card.Body>
          <Card.Title className='border-bottom'>{newItem.name}</Card.Title>
          <Card.Text>{newItem.dec}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link className='text-decoration-none textPrimary' to='/'>
            Read More
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NewItem;

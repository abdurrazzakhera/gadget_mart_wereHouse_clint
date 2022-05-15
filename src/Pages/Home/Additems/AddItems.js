import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const handelProduct = (event) => {
    event.preventDefault();
    const { email } = user;
    const name = event.target.name.value;
    const description = event.target.dec.value;
    const price = event.target.price.value;
    const supplier = event.target.suplier.value;
    const img = event.target.img.value;
    const quantity = event.target.quantity.value;
    const newAddProduct = {
      name,
      description,
      price,
      supplier,
      img,
      quantity,
      email,
    };
    console.log(email);
    fetch("https://immense-thicket-83418.herokuapp.com/items", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAddProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        event.target.reset();
        toast("Product added Succesfully");
      });
  };
  return (
    <div className='container'>
      <div className='text-center'>
        <h1 className='textPrimary py-3'>Added Your New Product</h1>
      </div>
      <div className='w-50 mx-auto'>
        <Form onSubmit={handelProduct}>
          <Form.Group controlId='formGridText'>
            <Form.Label>Product Picture Url</Form.Label>
            <Form.Control
              type='text'
              name='img'
              placeholder='Give Your Product Pic Url'
            />
          </Form.Group>
          <Form.Group controlId='formGridText'>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type='text' name='name' placeholder='Product Name' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as='textarea' name='dec' rows={2} />
          </Form.Group>

          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Per Unit Price</Form.Label>
              <Form.Control type='number' name='price' />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Suplier Name Name</Form.Label>
              <Form.Control
                type='text'
                name='suplier'
                placeholder='suplier Name'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type='number'
                name='quantity'
                placeholder='Product Quantity'
              />
            </Form.Group>
          </Row>

          <Button className='w-50 ' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddItems;

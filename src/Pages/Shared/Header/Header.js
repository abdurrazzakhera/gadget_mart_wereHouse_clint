import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      sticky='top'
      bg='secondary'
      variant='dark'
    >
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/updateInventory'>
              Inventorys
            </Nav.Link>
            <Nav.Link as={Link} to='/manageProduct'>
              Product Manage
            </Nav.Link>
            <Nav.Link as={Link} to='/additems'>
              Add Item
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>About</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

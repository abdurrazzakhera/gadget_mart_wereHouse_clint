import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handelSingOut = () => {
    signOut(auth);
  };
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
            {user && (
              <>
                <Nav.Link as={Link} to='/updateInventory'>
                  Inventorys
                </Nav.Link>
                <Nav.Link as={Link} to='/manageProduct'>
                  Product Manage
                </Nav.Link>
                <Nav.Link as={Link} to='/additems'>
                  Add Item
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>About</Nav.Link>
            {user ? (
              <Button onClick={handelSingOut}>Sing Out</Button>
            ) : (
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

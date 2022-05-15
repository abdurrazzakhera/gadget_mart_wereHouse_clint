import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handelSingOut = () => {
    signOut(auth);
  };
  return (
    // sticky='top'
    <Navbar collapseOnSelect expand='lg' sticky='top' className='navClass'>
      <Container>
        <Navbar.Brand>
          <Nav className='navbarlink'>
            <Nav.Link as={Link} to='/'>
              Gadget Mart
            </Nav.Link>
          </Nav>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto navbarlink'>
            <Nav.Link as={Link} to='/blogs'>
              BLOG
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              ABOUT US
            </Nav.Link>
          </Nav>
          <Nav className='navbarlink'>
            {user && (
              <>
                <Nav.Link as={Link} to='/updateInventory'>
                  UPDATING
                </Nav.Link>
                <Nav.Link as={Link} to='/manageProduct'>
                  MANAGE ITEMS
                </Nav.Link>

                <Nav.Link as={Link} to='/myitems'>
                  MY ITEMS
                </Nav.Link>
                <Nav.Link as={Link} to='/additems'>
                  ADD ITEMS
                </Nav.Link>
              </>
            )}
            {user ? (
              <Button
                className='bgPrimary border border-2 '
                onClick={handelSingOut}
              >
                LOGOUT
              </Button>
            ) : (
              <Nav.Link as={Link} to='/login'>
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

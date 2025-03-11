import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function NavbarComponent() {
  return (
    <div className="site-navbar">
      <Navbar expand="lg" className="bg-body-tertiary border-bottom border-2 border-body-secondary">
        <Container>
          <Navbar.Brand className='fs-1' as={Link} to="/">
            Sandøya Mat
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link className='fs-3' as={Link} to="/">
                Hjem
              </Nav.Link>
              
              <Nav.Link className='fs-3' as={Link} to="/liv">
                Liv på Brygga
              </Nav.Link>

              <Nav.Link className='fs-3' as={Link} to="/meny">
                Meny
              </Nav.Link>

              <NavDropdown className='fs-3' title="Mer" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/om-oss">
                  Om oss
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kontakt">
                  Kontakt
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/booking">
                  Booking
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent; 
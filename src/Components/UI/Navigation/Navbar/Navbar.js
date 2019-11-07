import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch,faHome } from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ backgroundColor: "#00BBEC", textDecoration: "none" }}
    >
      <Navbar.Brand href="/"><FontAwesomeIcon icon={faHome} size = 'lg' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="rbasic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="contactus">Contact Us</Navbar.Brand>
          <Navbar.Brand href="products">Products</Navbar.Brand>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>

        <Nav>
          <FormControl
            type="text"
            placeholder="Search"
            style={{ width: 230, height: 40, borderRadius: 5, backgroundColor:'#fff',marginBottom: 5 }}
            className="mr-sm-2"
          />
          <Button
            variant="dark"
            size="sm"
            style={{ width: 100, height: 40, borderRadius: 5, backgroundColor:'#fff' }}
          >
           <FontAwesomeIcon icon={faSearch} size = 'lg' />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;

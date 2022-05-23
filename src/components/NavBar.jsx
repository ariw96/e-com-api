import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(){

  return (
    <>
   <Navbar bg="light" expand="lg">
  <Container  >
    <Navbar.Brand className='fw-bold' href="#">MY-SHOP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" className='fw-bold'>Home</Nav.Link>
        <Nav.Link href="#action2">Products</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#action2">Contact</Nav.Link>
     
      
      </Nav>
      <div className="d-flex ms-2">
      
   <a href='#'>
        <Button variant="outline-dark" className='fa fa-shopping-cart me-2' >  Cart</Button>
   </a>
   <a href='#'>
        <Button variant="outline-dark" className='fa fa-user-plus me-2' >  Register</Button>
   </a>
   <a href='#'>
        <Button variant="outline-dark" className='fa fa-sign-in me-2' >  Login</Button>
   </a>

      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}
export default NavBar

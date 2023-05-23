import {Button, Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';

function Navbartop() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#">Team Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Dashbord</Nav.Link>
            <Nav.Link href="#action2">Create Team</Nav.Link>
            <Nav.Link href="#action3">My Teams</Nav.Link>
            <NavDropdown title="Requests" id="dropdown">
              <NavDropdown.Item href="#action4">Pending</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Accepted</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbartop;
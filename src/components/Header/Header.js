 
import './Header.css';
import  Navbar from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import  Container  from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';
import  FormControl  from 'react-bootstrap/FormControl';
import  Button  from 'react-bootstrap/Button';


function Header() {
  return (
    
<div>
<Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="/register">Registration</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>

 
</Navbar>
<Container fluid style={{backgroundColor:'black',color:'white'  } } >
<a style={{margin:'0.8rem'}} >go here</a>
<a style={{margin:'0.8rem'}} >go here</a>
</Container>

</div>   
  );
}

export default Header;
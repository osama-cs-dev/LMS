import { Navbar, Nav, Container } from 'react-bootstrap';
import './TopNavbar.css'; 

const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false} className="py-2">
      <Container className="d-flex justify-content-between">
      
        <Navbar.Brand href="Home" className="d-flex align-items-center">
          <img 
            height="20" 
            alt="Envato Market" 
            src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
            className="me-2"
          />
        </Navbar.Brand>

        
        <Nav>
          <Nav.Link href="#account" className="header-buy-now e-btn--3d -color-primary">
            Buy now
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;

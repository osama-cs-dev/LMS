import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Button, Badge } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./SecondaryNav.css";

const SecondaryNav = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(null);
  const location = useLocation();

  // تحديد active link حسب المسار الحالي
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/about") || path.includes("/instructors") || path.includes("/events")) setActiveLink("About");
    else if (path.includes("/courses")) setActiveLink("Courses");
    else if (path.includes("/blog")) setActiveLink("Blog");
    else if (path.includes("/contact")) setActiveLink("Contact");
    else if (path === "/" || path.includes("/home")) setActiveLink("Home");
  }, [location]);

  const handleSetActive = (linkName) => setActiveLink(linkName);

  const isActive = (linkName) => activeLink === linkName ? "active-nav" : "";

  const handleDropdownToggle = (dropdownName) => {
    setShowDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="fw-bold me-4">
          <img 
            src="https://wpdemothemes.com/edusion/wp-content/themes/edusion/assets/images/all-img/logo.png" 
            alt="Edusion Logo" 
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown
              id="home-pages-dropdown"
              className={isActive("Home")}
              show={showDropdown === "Home"}
              onClick={() => handleDropdownToggle("Home")}
              title="Home"
            >
              <NavDropdown.Item as={Link} to="Home" onClick={() => handleSetActive("Home")}>
                Home 1
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Home" onClick={() => handleSetActive("Home")}>
                Home 2
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Home" onClick={() => handleSetActive("Home")}>
                Home 3
              </NavDropdown.Item>
            </NavDropdown>

            {/* Pages / About Dropdown */}
            <NavDropdown
              id="pages-dropdown"
              className={isActive("About")}
              show={showDropdown === "About"}
              onClick={() => handleDropdownToggle("About")}
              title="Pages"
            >
              <NavDropdown.Item as={Link} to="/about" onClick={() => handleSetActive("About")}>About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about" onClick={() => handleSetActive("About")}>Instructors Style 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about" onClick={() => handleSetActive("About")}>Instructors Style 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about" onClick={() => handleSetActive("About")}>Events</NavDropdown.Item>
            </NavDropdown>

            {/* Courses Dropdown */}
            <NavDropdown
              id="courses-dropdown"
              className={isActive("Courses")}
              show={showDropdown === "Courses"}
              onClick={() => handleDropdownToggle("Courses")}
              title="Courses"
            >
              <NavDropdown.Item as={Link} to="/courses" onClick={() => handleSetActive("Courses")}>Course Style 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/courses" onClick={() => handleSetActive("Courses")}>Course Style 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/courses" onClick={() => handleSetActive("Courses")}>Course Style 3</NavDropdown.Item>
            </NavDropdown>

            {/* Blog Dropdown */}
            <NavDropdown
              id="blog-dropdown"
              className={isActive("Blog")}
              show={showDropdown === "Blog"}
              onClick={() => handleDropdownToggle("Blog")}
              title="Blog"
            >
              <NavDropdown.Item as={Link} to="Home" onClick={() => handleSetActive("Blog")}>Standard Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Home" onClick={() => handleSetActive("Blog")}>Blog Details</NavDropdown.Item>
            </NavDropdown>

          
            <Nav.Link as={Link} to="/contact" className={isActive("Contact")} onClick={() => handleSetActive("Contact")}>
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="align-items-center custom-right-nav">
            <Nav.Link href="#search" className="icon-link"><FaSearch size={18} /></Nav.Link>
            <Nav.Link as={Link} to="/cart" className="icon-link position-relative">
              <FaShoppingCart size={20} />
              <Badge bg="success" pill className="cart-badge">0</Badge>
            </Nav.Link>
            <Button className="btn-login">Login</Button>
            <Button className="btn-signup">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SecondaryNav;

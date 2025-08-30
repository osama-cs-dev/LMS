import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Button, Badge } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./SecondaryNav.css";

const SecondaryNav = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(null);
  const location = useLocation();

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

  const handleDropdownToggle = (dropdownName, isOpen) => {
    setShowDropdown(isOpen ? dropdownName : null);
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="Home" className="fw-bold me-4">
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
  onMouseEnter={() => handleDropdownToggle("Home", true)}
  onMouseLeave={() => handleDropdownToggle("Home", false)}
  title={
    <Link
      to="/home"
      onClick={() => handleSetActive("Home")}
      style={{ color: activeLink === "Home" ? "#2eca7f" : "inherit", textDecoration: "none" }}
      onMouseDown={e => e.stopPropagation()}  
    >
      Home
    </Link>
  }
>
  <NavDropdown.Item 
    as={Link} 
    to="/home" 
    onClick={() => handleSetActive("Home")}
    className={location.pathname === "/home" ? "active-dropdown" : ""}
  >
    Home 1
  </NavDropdown.Item>
  <NavDropdown.Item 
    as={Link} 
    to="/home" 
    onClick={() => handleSetActive("Home")}
    className={location.pathname === "/home" ? "active-dropdown" : ""}
  >
    Home 2
  </NavDropdown.Item>
  <NavDropdown.Item 
    as={Link} 
    to="/home" 
    onClick={() => handleSetActive("Home")}
    className={location.pathname === "/home" ? "active-dropdown" : ""}
  >
    Home 3
  </NavDropdown.Item>
</NavDropdown>

           <NavDropdown
  id="pages-dropdown"
  className={isActive("About")}
  show={showDropdown === "About"}
  onMouseEnter={() => handleDropdownToggle("About", true)}
  onMouseLeave={() => handleDropdownToggle("About", false)}
  title={
    <Link
      to="/about"
      onClick={() => handleSetActive("About")}
      style={{ color: activeLink === "About" ? "#2eca7f" : "inherit", textDecoration: "none" }}
      onMouseDown={e => e.stopPropagation()}
    >
      Pages
    </Link>
  }
>
              
              <NavDropdown.Item 
                as={Link} 
                to="/about" 
                onClick={() => handleSetActive("About")}
                className={location.pathname === "/about" ? "active-dropdown" : ""}
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/about" 
                onClick={() => handleSetActive("About")}
                className={location.pathname === "/about" ? "active-dropdown" : ""}
              >
                Instructors Style 1
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/about" 
                onClick={() => handleSetActive("About")}
                className={location.pathname === "/about" ? "active-dropdown" : ""}
              >
                Instructors Style 2
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/about" 
                onClick={() => handleSetActive("About")}
                className={location.pathname === "/events" ? "active-dropdown" : ""}
              >
                Events
              </NavDropdown.Item>
            </NavDropdown>

<NavDropdown
  id="courses-dropdown"
  className={isActive("Courses")}
  show={showDropdown === "Courses"}
  onMouseEnter={() => handleDropdownToggle("Courses", true)}
  onMouseLeave={() => handleDropdownToggle("Courses", false)}
  title={
    <Link
      to="/courses"
      onClick={() => handleSetActive("Courses")}
      style={{ color: activeLink === "Courses" ? "#2eca7f" : "inherit", textDecoration: "none" }}
      onMouseDown={e => e.stopPropagation()}
    >
      Courses
    </Link>
  }
>
              <NavDropdown.Item 
                as={Link} 
                to="/courses" 
                onClick={() => handleSetActive("Courses")}
                className={location.pathname === "/courses" ? "active-dropdown" : ""}
              >
                Course Style 1
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/courses" 
                onClick={() => handleSetActive("Courses")}
                className={location.pathname === "/courses" ? "active-dropdown" : ""}
              >
                Course Style 2
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/courses" 
                onClick={() => handleSetActive("Courses")}
                className={location.pathname === "/courses" ? "active-dropdown" : ""}
              >
                Course Style 3
              </NavDropdown.Item>
            </NavDropdown>

            
            
<NavDropdown
  id="blog-dropdown"
  className={isActive("Blog")}
  show={showDropdown === "Blog"}
  onMouseEnter={() => handleDropdownToggle("Blog", true)}
  onMouseLeave={() => handleDropdownToggle("Blog", false)}
  title={
    <Link
      to="Home"
      onClick={() => handleSetActive("Blog")}
      style={{ color: activeLink === "Blog" ? "#2eca7f" : "inherit", textDecoration: "none" }}
      onMouseDown={e => e.stopPropagation()}
    >
      Blog
    </Link>
  }
>
              <NavDropdown.Item 
                as={Link} 
                to="Home" 
                onClick={() => handleSetActive("Blog")}
                className={location.pathname === "/blog" ? "active-dropdown" : ""}
              >
                Standard Blog
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="Home" 
                onClick={() => handleSetActive("Blog")}
                className={location.pathname === "/blog-details" ? "active-dropdown" : ""}
              >
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>

          
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive("Contact")} 
              onClick={() => handleSetActive("Contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="align-items-center custom-right-nav">
            <Nav.Link href="#search" className="icon-link">
              <FaSearch size={18} />
            </Nav.Link>

            <Nav.Link href="#cart" className="icon-link position-relative">
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
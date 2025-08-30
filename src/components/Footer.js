import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-col">
  <h2 className="footer-logo">
    <img
      src="footer-logo.png"
      alt="Edusion Logo"
      style={{ height: "50px", objectFit: "contain" }}
    />
  </h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
    risus nec dui venenatis dignissim.
  </p>
  <div className="footer-socials">
    <span>CONNECT WITH:</span>
    <div>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-facebook"></i>
      <i className="fab fa-youtube"></i>
      <i className="fab fa-pinterest"></i>
    </div>
  </div>
</div>


        
        <div className="footer-col">
          <h3>Courses</h3>
          <ul>
            <li>Creative Writing</li>
            <li>Digital Marketing</li>
            <li>SEO Business</li>
            <li>Social Marketing</li>
            <li>Graphic Design</li>
            <li>Website Development</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Knowledge Base</li>
            <li>Affiliate Program</li>
            <li>Community</li>
            <li>Market API</li>
            <li>Support Team</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul>
            <li> Phone Number: +88 457 845 695</li>
            <li> Email: example@yourmail.com</li>
            <li> Location: California, USA</li>
          </ul>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© 2025 Edusion. All Rights Reserved</p>
        <div>
          <a href="#">Terms & Conditions</a>
          <a href="#">Special</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

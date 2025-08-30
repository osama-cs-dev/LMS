import { Link } from "react-router-dom";
import "./Courses.css";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section
        className="section-top"
        style={{
          backgroundImage:
            "url('https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png')",
        }}
      >
        <div className="container">
          <div className="col-lg-10 offset-lg-1 text-center">
            <div className="section-top-title">
              <h1>Contact</h1>
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li> / Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="info-box">
          <i className="icon">📍</i>
          <h3>Our Location</h3>
          <p>3481 Melrose Place, Beverly Hills<br />CA 90210</p>
        </div>
        <div className="info-box">
          <i className="icon">📞</i>
          <h3>Telephone</h3>
          <p>(+1) 517 397 7100<br />(+1) 411 315 8138</p>
        </div>
        <div className="info-box">
          <i className="icon">✉️</i>
          <h3>Send Email</h3>
          <p>Info@example.com<br />admin@example.com</p>
        </div>
      </section>

      <section className="contact-form-section">
        <h2 className="form-title">Send your message.</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <input type="text" placeholder="Your Subject" />
          <textarea placeholder="Your Message" rows="6"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;

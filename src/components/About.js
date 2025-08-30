import { Link } from "react-router-dom";
import "./About.css";
import LogoScroller from "./LogoScroller";


const About = () => {
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
              <h1>About Us</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li> / Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  <section className="info-section">
  <div className="info-row">
    <div className="info-column">
      <h3>Quality Education</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
      <div className="explore-btn">
        <a href="#">EXPLORE COURSES</a>
        <span className="arrow">→</span>
      </div>
    </div>

    <div className="column-divider"></div>

    <div className="info-column">
      <h3>Experienced Teachers</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
      <div className="explore-btn">
        <a href="#">EXPLORE COURSES</a>
        <span className="arrow">→</span>
      </div>
    </div>

    <div className="column-divider"></div>

    <div className="info-column">
      <h3>Delicious Food</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
      <div className="explore-btn">
        <a href="#">EXPLORE COURSES</a>
        <span className="arrow">→</span>
      </div>
    </div>
  </div>
</section>


      
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <div className="hero-image-wrapper">
                <img
                  src="women.png"
                  alt="Hero"
                  className="img-fluid hero-image"
                />
                <div className="shape-square"></div>
                <div className="shape-diamond"></div>
              </div>
            </div>

            
            <div className="col-md-6">
              <h2 className="hero-title">
                Learn New Skills To Go{" "}
                <span className="highlight">Ahead For Your</span> Career.
              </h2>
              <p className="hero-text">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
                eiusmod tempor incididunt ut labore et simply.
              </p>
              <p className="hero-text fw-bold">
                Auto-generate catchy original and high-converting copies in popular
                tones languages.
              </p>
              <Link to="/courses" className="explore-more-btn">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

     
      <section className="features-section py-5">
        <div className="container">
          <div className="d-flex align-items-center mb-2">
            <h6 className="team">WHY CHOOSE EDUSION</h6>
            <div className="subtitle-line"></div>
          </div>

          <h2 className="section-title mb-5">
            Find The <span>Best Features</span> Of <br></br>Edusion
          </h2>

          <div className="row g-4">
            {[
              {
               
                title: "Learn More Anywhere",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
              },
              {
                
                title: "Expert Instructor",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
              },
              {
                
                title: "Team Management",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
              },
              {
                
                title: "Course Planning",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
              },
              {
                
                title: "Teacher Monitoring",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
              },
              {
                
                title: "24/7 Strong Support",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
              },
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="feature-box p-4 h-100 shadow-sm rounded text-start">
                  <div className="icon-circle mb-3 fs-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
<section className="achievement-section py-5 bg-light">
  <div className="container">
    <div className="d-flex align-items-center mb-2">
      <h6 className="section-subtitle me-3">SOME FUN FACT</h6>
      <div className="subtitle-line-green"></div>
    </div>

    <h2 className="section-title mb-5">
      Our Great <span>Achievement</span>
    </h2>

    <div className="row g-4">
      {[
        {  count: 145, label: "Enrolled Students", color: "text-primary" },
        {  count: 89, label: "Academic Programs", color: "text-warning" },
        {  count: 28, label: "Winning Award", color: "text-success" },
        {  count: 16, label: "Certified Students", color: "text-danger" },
      ].map((item, idx) => (
        <div className="col-md-3 col-sm-6" key={idx}>
          <div className="p-4 bg-white rounded shadow-sm h-100 text-center">
            <div className={`fs-1 mb-2 ${item.color}`}>{item.icon}</div>
            <h3 className="fw-bold">{item.count}</h3>
            <p className="text-muted">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="achievement-section py-5 bg-light">
  <div className="container">
    <div className="d-flex align-items-center mb-2">
      <h6 className="section-subtitle me-3">Team Member</h6>
      <div className="subtitle-line-green"></div>
    </div>

   <h2 className="section-title mb-5">
      Our Expert <span >Instructors</span>
    </h2>

    <div className="row g-4">
      {[
        {
          name: "Daniel Miller",
          title: "Logo Expert",
          image: "man1.jpg", 
          courses: 3,
          students: 3,
          social: ["facebook", "twitter", "linkedin"],
        },
        {
          name: "Masum Billah",
          title: "Developer",
          image: "man2.jpg",
          courses: 6,
          students: 5,
          social: ["facebook", "twitter", "linkedin"],
        },
        {
          name: "Kenneth Renteria",
          title: "Marketer",
          image: "man3.jpg",
          courses: 0,
          students: 0,
          social: ["facebook", "twitter", "globe"],
        },
        {
          name: "Richard Hood",
          title: "UI UX Designer",
          image: "man4.jpg",
          courses: 2,
          students: 0,
          social: ["facebook", "twitter", "linkedin"],
        },
      ].map((instructor, idx) => (
        <div className="col-md-3" key={idx}>
          <div className="card h-100 shadow-sm border-0 text-center instructor-card">
            <div className="position-relative">
              <img
                src={instructor.image}
                alt={instructor.name}
                 className="card-img-top instructor-img"
                
              />
              <div className="social-links position-absolute top-0 end-0 p-2 d-flex flex-column">
                {instructor.social.map((platform, i) => (
                  <a
                    key={i}
                    href="#"
                    className="mb-2 text-white bg-success rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-success fw-bold">{instructor.name}</h5>
              <p className="text-muted">{instructor.title}</p>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <div>
                  <i className="far fa-file-alt me-1"></i>
                  <a href="Home" className="text-decoration-none">
                    {instructor.courses} Courses
                  </a>
                </div>
                <div>
                  <i className="far fa-user me-1"></i>
                  <a href="Home" className="text-decoration-none">
                    {instructor.students} Students
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="faq-section py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0">
        <h6 className="section-subtitle ">FREQUENTLY ASKED QUESTION</h6>
        
        <h2 className="section-title mb-4">
          General<br></br> <span >Questions</span>
        </h2>

        <div className="accordion" id="faqAccordion">
          {[
            {
              question: "What does it take excellent author?",
              answer:
                "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.",
            },
            {
              question: "Who will view my content?",
              answer:
                "Anyone with access to the platform can view your content based on your settings.",
            },
            {
              question: "What does it take become an author?",
              answer:
                "Simply register, complete your profile, and start contributing your content.",
            },
            {
              question: "How to Change my Password easily?",
              answer:
                "Go to settings > account > change password. Enter the new password and confirm.",
            },
            {
              question: "How does it create content?",
              answer:
                "You can use our AI-assisted tools or manually create content through the dashboard.",
            },
          ].map((item, idx) => (
            <div className="accordion-item mb-2" key={idx}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${idx}`}
                  aria-expanded={idx === 0 ? "true" : "false"}
                  aria-controls={`collapse${idx}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${idx}`}
                className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-md-6 text-center">
  <img
    src="women2.png"
    alt="FAQ"
    className="img-fluid responsive-img"
    style={{ objectFit: "contain" }}
  />
</div>

      </div>
    </div>
  
</section>
<LogoScroller />



    </>
  );
};

export default About;

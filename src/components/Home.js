import './Home.css';
import "./About.css";
import "./Courses.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoScroller from "./LogoScroller";
import { FaPaperPlane } from 'react-icons/fa';
import { FaRegCalendarAlt, FaRegFileAlt, FaMapMarkerAlt, FaStar, FaImage } from "react-icons/fa";
import { FaUserGraduate, FaBook, FaAward, FaCertificate } from "react-icons/fa";


function Home() {
  
   const topics = [
    { title: 'Business', count: 1, image: 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct5.svg' },
    { title: 'Data Science', count: 1, image: 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct6.svg' },
    { title: 'Digital Program', count: 2, image: 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct2.svg' },
    { title: 'Finance', count: 2, image: 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct3.svg' },
    { title: 'Modern Physics', count: 3, image: 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct4.svg' },
    { title: 'UI/UX Design', count: 3, image: 'https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct1.svg' },
  ]
  const courses = [
  {
    id: 1,
    title: "WordPress For Beginners – Master WordPress",
    category: "Digital Program",
    price: "Free",
    lessons: 15,
    duration: "7 hours 30 minutes",
    rating: 4.33,
    level: "Beginner",
    image: process.env.PUBLIC_URL + "/courses/1.jpg",
  },
  {
    id: 2,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    image: process.env.PUBLIC_URL + "/courses/2.jpg",
  },
  {
    id: 3,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    image: process.env.PUBLIC_URL + "/courses/3.jpg",
  },
  {
    id: 3,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    image: process.env.PUBLIC_URL + "/courses/4.jpg",
  },
  {
    id: 3,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
   image: process.env.PUBLIC_URL + "/courses/5.jpg",
  },
  {
    id: 3,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    image: process.env.PUBLIC_URL + "/courses/6.jpg",
  },
]
const achievements = [
    { count: 145, label: "Enrolled Students", color: "text-primary", icon: <FaUserGraduate /> },
    { count: 89, label: "Academic Programs", color: "text-warning", icon: <FaBook /> },
    { count: 28, label: "Winning Award", color: "text-success", icon: <FaAward /> },
    { count: 16, label: "Certified Students", color: "text-danger", icon: <FaCertificate /> },
  ];
const featureIcons = [
  { text: "Learn at your own pace", icon: <FaRegCalendarAlt color='#34A853'  /> },
  { text: "Learn at your own pace", icon: <FaRegFileAlt color='#34A853'  /> },
  { text: "Learn at your own pace", icon: <FaMapMarkerAlt color='#34A853' /> },
  { text: "Learn at your own pace", icon: <FaStar color='#34A853' /> },
  { text: "Learn at your own pace", icon: <FaImage color='#34A853' /> },
  { text: "Learn at your own pace", icon: <FaPaperPlane color='#34A853'  /> },
  { text: "Learn at your own pace", icon: <FaRegCalendarAlt color='#34A853'  /> }, // تكرار مؤقت
];

const plans = [
  {
    title: "Free",
    price: "$0",
    per: "/Month",
    note: "Upgrade as you need",
    features: featureIcons,
  },
  {
    title: "Saver plan",
    price: "$29",
    per: "/Month",
    note: "$348 Per Year",
    features: featureIcons,
  },
  {
    title: "Unlimited plan",
    price: "$49",
    per: "/Month",
    note: "$588 Per Year",
    features: featureIcons,
  },
]
const blogs = [
  {
    image: process.env.PUBLIC_URL + "/blogs/blog1.jpg",
    date: "Jun 01, 2024",
    category: "Technology",
    title: "Professional Mobile Painting and Sculpting",
  },
  {
    image: process.env.PUBLIC_URL + "/blogs/blog2.jpg",
    date: "May 29, 2024",
    category: "Programming",
    title: "Professional Ceramic Moulding for Beginner",
  },
  {
    image: process.env.PUBLIC_URL + "/blogs/blog1.jpg",
    date: "May 29, 2024",
    category: "Programming",
    title: "Professional Ceramic Moulding for Beginner",
  },
];

  const [playVideo, setPlayVideo] = useState(false);

  // const [email, setEmail] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Subscribed with email: ${email}`);
  //   setEmail("");
  // };

  return (
    
    <>
     <section
      className="home-section"
style={{ backgroundImage: "url('https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/home2.png')" }}
    >
      <div className="content-wrapper">
        <h1 className="main-heading">
  Get smart <span className="highlighted">opportunity for</span>
  <br />
  your best future
</h1>


        <p>
          It is a long established fact that reader will be distracted readable
          content of a page when.
        </p>

        <div className="search-bar">
          <input type="text" placeholder="Search Your Course Here" />
          <button>
            Search <FaPaperPlane />
          </button>
        </div>

        <p className="popular-topics">
          Popular Topic:
          <span> Business</span>, <span> Data Science</span>,
          <span> Digital Program</span>, <span> Finance</span>
        </p>
      </div>
    </section>
   <section className="info-section">
  <div className="info-row">
    <div className="info-column">
      <h3>Quality Education</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
      <div className="explore-btn">
        <a href="/courses">EXPLORE COURSES</a>
        <span className="arrow">→</span>
      </div>
    </div>

    <div className="column-divider"></div>

    <div className="info-column">
      <h3>Experienced Teachers</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
      <div className="explore-btn">
        <a href="/courses">EXPLORE COURSES</a>
        <span className="arrow">→</span>
      </div>
    </div>

    <div className="column-divider"></div>

    <div className="info-column">
      <h3>Delicious Food</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
      <div className="explore-btn">
        <a href="/courses">EXPLORE COURSES</a>
        <span className="arrow">→</span>
      </div>
    </div>
  </div>
</section>

<section className="topics-section">
  <p className="section-subtitle">START LEARNING</p>
  <h2 className="section-title">
    Popular <span>Topics To Learn</span> From<br></br> Today.
  </h2>

  <div className="topics-grid">
    {topics.map((topic, index) => (
      <div className="topic-card" key={index}>
        <div className="topic-image">
          <img src={topic.image} alt={topic.title} />
        </div>
        <div className="topic-content">
          <h3 className="topic-title">{topic.title}</h3>
          <p className="topic-courses">{topic.count} Courses</p>
        </div>
      </div>
    ))}
  </div>
</section>

  <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
      
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <div className="hero-image-wrapper">
                <img
                  src={process.env.PUBLIC_URL + "/images/women.png"} alt="women"

                  
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
  <section className="top-courses-section">
  <p className="section-subtitle">POPULAR COURSES</p>
  <h2 className="section-title">
    Choose Our <span className="highlight">Top Courses</span>
  </h2>

  <section>
      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="course-body">
              <div className="course-header">
                <span className="course-category">{course.category}</span>
                <span className="course-price">{course.price}</span>
              </div>

              <h3 className="course-title">{course.title}</h3>

              <div className="course-info">
                <span> {course.lessons} Lessons</span>
                <span> {course.duration}</span>
              </div>

              <div className="course-footer">
                <span> {course.rating}</span>
                <span>{course.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
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
          {achievements.map((item, idx) => (
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
   <section className="video-section py-5">
      <div className="container">
        <div className="video-wrapper">
          {!playVideo && (
            <div className="video-poster" onClick={() => setPlayVideo(true)}>
              <img
                src={process.env.PUBLIC_URL + "/images/video.jpg"} alt="video"
                className="video-image"
              />
              <div className="play-button">&#9658;</div> 
            </div>
          )}

          {playVideo && (
            <iframe
              src="https://www.youtube.com/embed/0KYxN1kJSb0?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-player"
            ></iframe>
          )}
        </div>
      </div>
    </section>
    <LogoScroller />
  <section className="learning-section">
      <div className="learning-content">
        <div className="text-area">
          <p className="subtitle">Best Online Learning Platform</p>
          <h1>
            One Platfrom & Many<br></br> <span className="highlight">Courses</span> For You
          </h1>
          <p className="description">
            From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.
          </p>

          <ul className="features-list">
            <li> 9/10 Average Satisfaction Rate</li>
            <li> 96% Completetation Rate</li>
            <li>Friendly Environment & Expert Teacher</li>
          </ul>

          <button className="explore-btn"><pre>    </pre>EXPLORE OUR COURSES →</button>
        </div>

        <div className="image-area">
<img 
  src={process.env.PUBLIC_URL + "/images/sqaure.png"} 
  alt="Online Course" 
  className="main-img" 
/>
        </div>
      </div>
    </section>
<section className="pricing-section">
      <div className="section-header">
        <p className="subtitle">POPULAR COURSES</p>
        <h2>Choose Our <span className="highlight">Top Courses</span></h2>
      </div>
      <div className="pricing-cards">
        {plans.map((plan, idx) => (
          <div className="pricing-card" key={idx}>
            <h3>{plan.title}</h3>
            <div className="price">{plan.price}<span>{plan.per}</span></div>
            <p className="note">{plan.note}</p>
            <hr />
            <ul className="features">
  {plan.features.map((feature, i) => (
    <li key={i}>
      <span className="icon">{feature.icon}</span>
      {feature.text}
    </li>
  ))}
</ul>

            <button className="start-btn">Start Now</button>
            <div className="card-deco"></div>
          </div>
        ))}
      </div>
    </section>
    
    <section className="latest-blogs-section">
      <div className="section-header">
        <p className="section-subtitle">NEWS</p>
        <h2 className="section-title">
          Our Latest <span className="highlight">Blogs</span>
        </h2>
      </div>

      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">
                {blog.date} | <span className="blog-category">{blog.category}</span>
              </p>
              <h3 className="blog-title">{blog.title}</h3>
              <button className="read-more">READ MORE →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Home;

import { Link } from "react-router-dom";
import "./Courses.css";

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
  {
    id: 3,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    image: process.env.PUBLIC_URL + "/courses/7.jpg",
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
   image: process.env.PUBLIC_URL + "/courses/8.jpg",
  },
  {
    id: 4,
    title: "Ultimate Photoshop Training: From Beginner",
    category: "UI/UX Design",
    price: "Free",
    lessons: 14,
    duration: "13 hours 20 minutes",
    rating: 3.33,
    level: "All Levels",
   image: process.env.PUBLIC_URL + "/courses/9.jpg",
  },
];

const Courses = () => {
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
              <h1>Courses</h1>
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
    </>
  );
};

export default Courses;

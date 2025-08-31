import "./Courses.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "WordPress For Beginners – Master WordPress",
    category: "Digital Program",
    price: "Free",
    lessons: 15,
    duration: "7 hours 30 minutes",
    rating: 4.33,
    level: "Beginner",
    releaseDate: "2024-01-15",
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
    releaseDate: "2023-11-05",
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
    releaseDate: "2023-10-10",
    image: process.env.PUBLIC_URL + "/courses/3.jpg",
  },
  {
    id: 4,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    releaseDate: "2023-09-01",
    image: process.env.PUBLIC_URL + "/courses/4.jpg",
  },
  {
    id: 5,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    releaseDate: "2023-08-15",
    image: process.env.PUBLIC_URL + "/courses/5.jpg",
  },
  {
    id: 6,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    releaseDate: "2023-07-20",
    image: process.env.PUBLIC_URL + "/courses/6.jpg",
  },
  {
    id: 7,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    releaseDate: "2023-06-10",
    image: process.env.PUBLIC_URL + "/courses/7.jpg",
  },
  {
    id: 8,
    title: "The Complete Python Course For Beginner 2023",
    category: "Data Science",
    price: "$300",
    lessons: 14,
    duration: "18 hours 20 minutes",
    rating: 4.0,
    level: "Intermediate",
    releaseDate: "2023-05-05",
    image: process.env.PUBLIC_URL + "/courses/8.jpg",
  },
  {
    id: 9,
    title: "Ultimate Photoshop Training: From Beginner",
    category: "UI/UX Design",
    price: "Free",
    lessons: 14,
    duration: "13 hours 20 minutes",
    rating: 3.33,
    level: "All Levels",
    releaseDate: "2022-07-22",
    image: process.env.PUBLIC_URL + "/courses/9.jpg",
  },
];

const Courses = () => {
  const [sortOption, setSortOption] = useState("newest");

  const sortedCourses = [...coursesData].sort((a, b) => {
    if (sortOption === "newest") {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    } else if (sortOption === "oldest") {
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    } else if (sortOption === "title-asc") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "title-desc") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

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

      <div className="filter-bar">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="newest">Release Date (newest first)</option>
          <option value="oldest">Release Date (oldest first)</option>
          <option value="title-asc">Course Title (a-z)</option>
          <option value="title-desc">Course Title (z-a)</option>
        </select>
      </div>

      <section>
        <div className="courses-container">
          {sortedCourses.map((course) => (
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

import React, { createContext, useState } from "react";
import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";

// Create the context for enrolled courses
export const EnrolledCoursesContext = createContext();

export default function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollInCourse = (course) => {
    setEnrolledCourses((prevCourses) => [...prevCourses, course]);
  };

  const dropCourse = (courseNumber) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.filter((course) => course.courseNumber !== courseNumber)
    );
  };

  return (
    <EnrolledCoursesContext.Provider value={{ enrolledCourses, enrollInCourse, dropCourse }}>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </EnrolledCoursesContext.Provider>
  );
}
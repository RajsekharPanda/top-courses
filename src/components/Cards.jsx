import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {

  const getCourses = () => {
    const allCourses = [];
    Object.values(courses).forEach((courseCatogery) => {
      courseCatogery.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div>
      {getCourses().map((course,i) => {
        return <Card key={course.id} course={course}  />;
      })}
    </div>
  );
};

export default Cards;

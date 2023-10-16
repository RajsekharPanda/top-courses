import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let course = props.courses;
  let category = props.catogery;
  const [likedCourses, setLikedCourses] = useState([]);
  console.log(props)
  const getCourses = () => {
    if (category === "All") {     
      const allCourses = [];
      Object.values(course).forEach((courseCatogery) => {
        courseCatogery.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }
    else{
      return course[category];
      // console.log(category);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-9 mb-4 ">
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
      })}
    </div>
  );
};

export default Cards;


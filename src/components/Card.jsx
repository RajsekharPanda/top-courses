import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ( props ) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    if (likedCourses.includes(course.id)) {
      setLikedCourses( (prev) => prev.filter( (cid)=>(cid !== course.id) ) );
      toast.warning("like removed");
    }
    else{
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev, course.id]);
      }
      toast.success("liked successfully");
    }
  }
  return (
    <div className="w-[300px] bg-[#1e1b4b] bg-opacity-90 rounded-md overflow-hidden shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="relative ">
        <img src={course.image?.url} alt="" />

        <div  className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center ">
          <button onClick={clickHandler}>
            {
              likedCourses?.includes(course.id)? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>) 
            }
          </button>
        </div>
      </div>

      <div className="text-white p-4">
        <p className="font-semibold text-lg leading-6">{course?.title}</p>
        <p className="mt-2 ">
          {
            course.description.length >100? (course.description.substr(0,100))+"..." : (course.description)
          }
        </p>
      </div>
    </div>
  );
};

export default Card;

// #fed7aa

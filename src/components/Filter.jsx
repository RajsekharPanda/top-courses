import React from "react";

export const Filter = ({ filterData }) => {
  // console.log("Hi from fliter");
  return (
    <div>
      {filterData.map((data) => {
       return( <button key={data.title}>{data.title}</button>)
      })}
    </div>
  );
};

export default Filter;

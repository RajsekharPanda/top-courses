import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data)
        setCourses(data.data);
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    fetchData();
  }, []);
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <Filter filterData={filterData} />

      {courses && <Cards courses={courses} />}
    </div>
  );
}

export default App;

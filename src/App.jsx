import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catogery,setCatogery] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      // console.log(data)
      setCourses(data.data);
    } catch (error) {
      toast.error("something went wrong");
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  // const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className="">
      <div>
        <Filter filterData={filterData} catogery={catogery} setCatogery={setCatogery}/>
      </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50v]">
          {
            loading? (<Spinner/>) : (<Cards courses={courses} catogery={catogery}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

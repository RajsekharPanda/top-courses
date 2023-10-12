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
  const [loading, setLoading] = useState(true)

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
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData} />
      </div>

      <div>
        {
          loading? (<Spinner/>) : (<Cards courses={courses} />)
        }
        
      </div>
    </div>
  );
}

export default App;

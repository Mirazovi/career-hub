import { useEffect, useState } from "react";
import Category from "./Category";

const JobCategory = () => {
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <div className="text-center w-[50%] m-auto">
            <h1 className="text-5xl font-bold">Job Category List</h1>
            <p className="text-xl py-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    category.map((job,idx) => <Category key={idx} job={job}></Category>)
                }
            </div>
            
        </div>
    );
};

export default JobCategory;
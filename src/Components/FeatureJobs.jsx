import { useEffect, useState } from "react";
import Job from "./Job";


const FeatureJobs = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength,setDataLength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="my-10">
            <h1 className="text-5xl font-bold text-center">Featured Jobs</h1>
            <p className="text-xl text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 my-6">
                {
                    jobs.slice(0,dataLength).map((job,idx) => <Job key={idx} job={job}></Job>)
                }
            </div>
            <div className={`flex justify-center ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={()=>setDataLength(jobs.length)} className='border-2 py-2 px-4 rounded-lg text-white bg-violet-600 my-2 text-xl font-bold'>Show All</button>
            </div>
        </div>
    );
};

export default FeatureJobs;
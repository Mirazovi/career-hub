import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredFromLs } from "./LocalStorage";
import Applied_job from "./Applied_job";


const Applied_jobs = () => {
    const Jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs] = useState([]);
    useEffect(()=>{
        const AppliedJobs = getStoredFromLs();
        if(Jobs.length > 0){
            // const ApplyJob = Jobs.filter(job => AppliedJobs.includes(job.id));
                                    // another way 
            const Applied = [];
            for(const id of AppliedJobs){
                const jobs = Jobs.find(job => job.id === id)
                if(jobs){
                    Applied.push(jobs)
                }
            }
            setAppliedJobs(Applied);
        }
    },[])
    return (
        <div>
            <div>
                {
                    appliedJobs.map((job,idx) => <Applied_job key={idx} job={job}></Applied_job>)
                }
            </div>
        </div>
    );
};

export default Applied_jobs;
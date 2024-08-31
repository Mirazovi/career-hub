import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveJobLs } from "./LocalStorage";

const JobDetails = () => {
    const {id} = useParams()
    const idInt = parseInt(id);
    const jobs = useLoaderData();
    const job =  jobs.find(job => job.id === idInt)
    const {job_description,job_responsibility,educational_requirements,experiences,job_title,salary,contact_information} = job;
    const handleApplyJob = () =>{
        SaveJobLs(idInt);
        toast('Your job applied successfully');
    }
    return (
        <div className="my-10">
            <div className="grid-cols-4 grid gap-4">
                <div className="col-span-3">
                    <h1><span className="text-3xl font-bold"> Job Description : </span><span className="text-xl text-gray-600">{job_description}</span></h1>
                    <h1 className="py-2"><span className="text-3xl font-bold"> Job Responsibility : </span><span className="text-xl text-gray-600">{job_responsibility}</span></h1>
                    <h1><span className="text-3xl font-bold"> Educational Requirement : </span><span className="text-xl text-gray-600">{educational_requirements}</span></h1>
                    <h1 className="py-2"><span className="text-3xl font-bold"> Experience : </span><span className="text-xl text-gray-600">{experiences}</span></h1>

                </div>
                <div>
                <div className="col-span-1 bg-violet-50 p-6 rounded-lg my-4">
                    <h1 className="text-2xl font-bold">Job Details :</h1>
                    <div className="py-2">
                        <hr />
                    </div>
                    <p><span className="text-xl font-bold">Job Title :</span> <span className="text-xl">{job_title}</span></p>
                    <p><span className="text-xl font-bold">Salary :</span> <span className="text-xl">{salary}</span></p>
                    <h2 className="text-2xl font-bold py-2">Contact Information</h2>
                    <hr />
                    <p className="py-1"><span className="text-xl font-bold">Phone : </span> <span className="text-xl">{contact_information.phone}</span></p>
                    <p><span className="text-xl font-bold">Email :</span> <span className="text-xl">{contact_information.email}</span></p>
                    <p><span className="text-xl font-bold">Address :</span> <span className="text-xl">{contact_information.address}</span></p>
                   
                </div>
                <button onClick={handleApplyJob} className="py-2 px-4 rounded-xl text-xl text-white font-bold bg-violet-700 w-full">Apply Now</button>
                </div>
            
            </div>
            <ToastContainer />
        </div>
    );
};


export default JobDetails;
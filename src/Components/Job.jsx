import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Job = ({job}) => {
    const {id,job_title,company_name,job_type,remote_or_onsite,location,salary} = job;
    return (
        <div className='border-2 border-gray-400 p-6 rounded-xl'>
            <img src={job.logo} alt="" />
            <h1 className='text-3xl font-bold py-2'>{job_title}</h1>
            <h3 className='text-xl'>{company_name}</h3>
            <div className='flex gap-4 items-center my-2'>
                <p className='border-2 py-2 px-4 rounded-lg border-violet-600 text-violet-600 text-xl font-bold'>{remote_or_onsite}</p>
                <p className='border-2 py-2 px-4 rounded-lg border-violet-600 text-violet-600 text-xl font-bold'>{job_type}</p>
            </div>
            <div className='text-xl flex gap-4 items-center'>
                <p className='flex gap-2 items-center'><span className='text-xl'><MaterialSymbolsPinDropOutlineRounded/></span> {location}</p>
                <p>$ {salary}</p>
            </div>
            <NavLink to={`/job/${id}`}>
            <button className='border-2 py-2 px-4 rounded-lg text-white bg-violet-600 my-2 text-xl font-bold'>View Details</button>
            </NavLink>
        </div>
    );
};
Job.propTypes ={
    job:PropTypes.object
}

export function MaterialSymbolsPinDropOutlineRounded(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 16.475q2.475-2 3.738-3.85T17 9.15q0-2.25-1.4-3.7T12 4T8.4 5.45T7 9.15q0 1.625 1.263 3.475T12 16.475m0 2.05q-.3 0-.6-.1t-.55-.3q-2.95-2.35-4.4-4.587T5 9.15q0-3.125 1.95-5.137T12 2t5.05 2.013T19 9.15q0 2.15-1.45 4.388t-4.4 4.587q-.25.2-.55.3t-.6.1M12 11q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11M6 22q-.425 0-.712-.288T5 21t.288-.712T6 20h12q.425 0 .713.288T19 21t-.288.713T18 22zm6-13"></path></svg>
    )
  }
export default Job;
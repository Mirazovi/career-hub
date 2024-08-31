
import PropTypes from 'prop-types'
const Applied_job = ({job}) => {
    console.log(job);
    const {logo,job_title,company_name,job_type,remote_or_onsite,location,salary} = job;
    return (
        <div className='my-10'>
            <div className="grid grid-cols-5 gap-6 border-2 my-2 p-6 rounded-xl">
                {/* div 1  */}
                <div className="col-span-1 bg-gray-300 rounded-lg h-full flex justify-center">
                    <img className="py-12 px-10" src={logo} alt="" />
                </div>
                {/* div 2 */}
                <div className="col-span-3">
                    <h1 className="text-2xl font-bold">{job_title}</h1>
                    <p className="text-xl py-2">{company_name}</p>
                    <div className="flex gap-4 text-xl">
                        <p className="py-2 px-4 rounded-lg border-2 border-violet-600 text-violet-900">{job_type}</p>
                        <p className="py-2 px-4 rounded-lg border-2 border-violet-600 text-violet-900">{remote_or_onsite}</p>
                    </div>
                    <div className="text-xl text-gray-700 gap-4 flex items-center py-2">
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                </div>
                {/* div 3  */}
                <div className="col-span-1">
                <button className="text-xl font-bold text-white bg-violet-900 rounded-lg py-3 px-6 ">Show Details</button>
                </div>
            </div>
        </div>
    );
};
Applied_job.propTypes = {
    job:PropTypes.object
}
export default Applied_job;
const getStoredFromLs = () => {
    const StoredJob = localStorage.getItem('job-application');
    if(StoredJob){
        return JSON.parse(StoredJob);
    }
    return [];
}
const SaveJobLs = (id) =>{
    const AppliedJob = getStoredFromLs();
    const exists = AppliedJob.find(job => job === id)
    if(!exists){
        AppliedJob.push(id);
        localStorage.setItem('job-application',JSON.stringify(AppliedJob));
    }
}
export {getStoredFromLs,SaveJobLs}
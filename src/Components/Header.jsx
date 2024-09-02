

const Header = () => {
    return (
        <div>
            <div className="flex justify-between gap-16 items-center my-8">
                <div className="w-1/2">
                    <h1 className="text-2xl text-violet-900 font-bold text-center">My Name is : Md Miraz Hossain Ovi</h1>
                    <h1 className="text-7xl">One Step Closer To Your <span className="text-violet-700">Dream Jobs</span></h1>
                    <p className="text-xl py-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="text-xl text-white py-2 px-4 rounded-lg bg-violet-700">Get Started</button>
                </div>
                <div className="w-1/2">
                    <img className="w-full" src="/public/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
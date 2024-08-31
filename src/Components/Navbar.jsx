import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-3 ">
            <h1 className="text-4xl font-bold">Career Hub</h1>
            <div className="flex gap-5 text-xl text-violet-700">
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/applied'}>Applied Jobs</NavLink>
                <NavLink to={'/blogs'}>Blogs</NavLink>
            </div>
            <button className="text-xl py-2 px-4 rounded-lg text-white bg-violet-700">Start Applying</button>
        </div>
    );
};

export default Navbar;
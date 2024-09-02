import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"


const Root = () => {
    return (
        <>
        <div className="lg:w-[90%] m-auto ">
            <Navbar></Navbar> 
            <Outlet></Outlet>
        </div>
            <div>
            <Footer></Footer>
            </div>
        </>
    );
};

export default Root;
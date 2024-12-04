import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allEqui'>All Equi</NavLink></li>
        <li><NavLink to='/addEqui'>Add Equi</NavLink></li>
        <li><NavLink to='/myEqui'>My Equi</NavLink></li>
    </>

    return (
        <div>
            <div className="container mx-auto navbar flex justify-between bg-base-100">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <FaBars />

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Sports Sphere</a>
                </div>
                <div>
                    <div className=" hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                         {navOptions}
                        </ul>
                    </div>
                    <div className="">
                        <a className="btn">SignUp</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
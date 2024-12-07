
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('user log out success')
            })
            .catch(err => {
                console.log('Error', err.message)
            })
    }

    const navOptions = < >
        <li><NavLink className='font-bold text-base' to='/'>Home</NavLink></li>
        <li><NavLink  className='font-bold text-base' to='/allEqui'>All Equi</NavLink></li>
        <li><NavLink className='font-bold text-base'  to='/addEqui'>Add  Equi</NavLink></li>
        <li><NavLink  className='font-bold text-base' to='/myEqui'>My Equi</NavLink></li>

    </>

    return (
        <div>
            <div className="w-11/12 mx-auto navbar flex justify-between">
               
                    <div className="first">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <FaBars className="text-2xl"/>

                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navOptions}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-3xl">Sports Sphere</a>
                    </div>
                     <div>
                    <div className="second hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                   
                </div>
                <div className="third">
                    {
                        user ? <div className="flex justify-center items-center gap-2">
                            <p><Link className="hover:underline  decoration-2 underline-offset-2 font-bold" onClick={handleLogOut}>Log Out</Link></p>
                            <div>
                                <img title= {user.displayName} className="w-12 rounded-full border  border-blue-600 border-2" src={user.photoURL} alt="" />
                            </div>
                        </div> :
                            <div className="*:font-bold">
                                <Link className="hover:underline  decoration-2 underline-offset-2 font-bold"  to='/login' >Login</Link>
                                <span> / </span>
                                <Link className="hover:underline  decoration-2 underline-offset-2 font-bold" to='/register' >Register</Link>

                            </div>

                    }

                </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
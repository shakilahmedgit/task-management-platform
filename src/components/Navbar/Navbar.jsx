import {Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    };

    const navlinks = <>

            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            Home
            </NavLink>

            <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            About
            </NavLink>
            
            <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            Contact
            </NavLink>

            <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7 rounded-tl-xl rounded-br-xl   hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-lg hover:rounded-bl-lg " : " "
            }
            >
            Dashboard
            </NavLink>
            
        </>


    return (

        <div className="navbar bg-base-100  py-4 px-2 md:px-5 lg:px-10 xl:px-20 flex justify-between z-50">
            <div className=" z-50">
                <div className="dropdown  z-50">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        {navlinks}
                    </li>
                </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}

                <Logo></Logo>
            </div>
            <div className="hidden lg:flex  z-50">
                <ul className="">
                <li className="flex justify-between items-center gap-5">
                    {navlinks}
                </li>
                </ul>
            </div>
            <div className="flex items-center  z-50">
                {
                    user  ? 
                    <div className="flex justify-between items-center gap-3">
                        {
                            user?.displayName ? 
                            <div className="flex items-center gap-2">
                                <span className="hidden sm:inline"><small>{user?.displayName}</small></span>
                                {
                                    user?.photoURL ?
                                    <img src={user?.photoURL} className="hidden sm:inline border-box h-6" alt="" />
                                    :
                                    <img className="w-9 h-9 rounded-full" src="https://i.ibb.co/7vBH7FK/photo-6275977664170932681-x.jpg" alt="" />
                                }
                            </div>
                            :
                            <span className="hidden sm:inline"><small>{user?.email}</small></span>
                        }
                        <button onClick={handleSignOut} className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Sign Out</button>
                    </div>
                    :
                    <Link to={'/login'}>
                        <button className="bg-[#FF444A] text-white py-1 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import logo from '../../../assets/banner/home.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }
    const navItems =
        < div className="flex navItem">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/alltoy'>All Toys</NavLink></li>
            {
                user ?
                    <><li><NavLink to='/mytoy'>My Toys</NavLink></li>
                        <li><NavLink to='/addtoy'>Add A Toy</NavLink></li>
                    </>
                    : <li><NavLink to='/login'>Login</NavLink></li>}

            <li><NavLink to='/blog'>Blogs</NavLink></li>

        </div>

    return (
        <div className="navbar fixed z-10  max-w-screen-xl bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="flex ml-4">
                    <img style={{width:'50px'}} src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl ">BrainYToyStroe</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                         <img title="BrainToy" style={{width:"40px"}} className="rounded-lg mr-4" src={'https://i.ibb.co/w0yKNh1/cl4-copyright.webp'} alt="" />
                        <button onClick={handleLogout}>LogOut</button>
                    </>
                    :
                  <>    </>
                }
            </div>
        </div >
    );
};

export default Navbar;
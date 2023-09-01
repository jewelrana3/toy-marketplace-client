import { useContext } from "react";
import { NavLink } from "react-router-dom";
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
                    <>
                        <li><NavLink to='/mytoy'>My Toys</NavLink></li>
                        <li><NavLink to='/addtoy'>Add A Toy</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/sales'>Sales</NavLink></li>
                       
                    </>
                    : <li><NavLink to='/login'>Login</NavLink></li>}

            <li><NavLink to='/blog'>Blogs</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>

        </div>

    return (
        <div className="navbar fixed z-10  bg-zinc-300">
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
                    <img style={{ width: '50px' }} src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl ">BrainYToyStroe</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <>
                        <img title={user?.displayName} style={{ width: "40px", borderRadius: '50%' }} className=" mr-4" src={user?.photoURL} alt="" />
                        <button className="btn btn-primary" onClick={handleLogout}>LogOut</button>
                    </>
                    :
                    <>    </>
                }
            </div>
        </div >
    );
};

export default Navbar;
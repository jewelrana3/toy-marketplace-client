import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import logo from '../../../assets/g-4.jpg'
import './Navbar.css'
import ActiveLink from "../../ActiveLink/ActiveLink";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems = <>

        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>

        {user?.email ? <>

            <li ><ActiveLink to='/mytoy'>My Toy</ActiveLink></li>
            <li ><ActiveLink to='/alltoys'>Add A Toys</ActiveLink></li>
            <li ><ActiveLink to='/alltoys'>All My Toys</ActiveLink></li>
            <li><button onClick={handleLogOut}>Log Out</button></li>
        </>
            : <li><Link to='/login'><button>Login</button></Link></li>}


    </>

    return (
        <div className="navbar  h-28 mb-4 bg-slate-600">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <h3 className="text-white">Baby Toys</h3>
                </Link>
            </div>
            <div className=" hidden lg:flex" >
                <ul className="menu menu-horizontal">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-12 rounded-full">
                   {user?.email ? <img className="w-12 rounded-full" title="Baby care full" src={logo} /> :''}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
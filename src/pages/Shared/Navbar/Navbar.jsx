import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
// import logo from '../../../assets/logo.svg'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link>All My Toys</Link></li>
        <li><Link>My Toy</Link></li>
       {/* { user?.email ?<li className="mr-4" ><Link to='/bookings'>Add A Toys</Link></li>:""} */}
        <li><Link>Blog</Link></li>

    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
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
                    <h3>Baby Toys</h3>
                </Link>
            </div>
            <div className=" hidden lg:flex" style={{marginRight:-150}}>
                <ul className="menu menu-horizontal">
                {navItems}
            </ul>
            </div>
            <div className="navbar-end">
                {user ?.email ? <>
                    <li className="mr-4" style={{listStyleType:"none"}}><Link to='/bookings'>Add A Toys</Link></li>
                    <button className="btn btn-info" onClick={handleLogOut}>Log Out</button>
                </>
                    : <Link to='/login'><button className="btn btn-success">Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;
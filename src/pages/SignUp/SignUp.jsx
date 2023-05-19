import { Link } from "react-router-dom";
// import img from '../../assets/images/login/login.svg'

import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import Social from "../Social/Social";
// import SocialLogin from "../shared/SocialLogin/SocialLogin";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup=event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,photo,email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
        }).catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-3xl font-bold'>Sign Up</h2>
                        <form onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6"> 
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <h2>New cars doctors Account?
                            <Link className='text-orange-600' to='/login'>Login</Link>
                            <Social></Social>
                        </h2>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
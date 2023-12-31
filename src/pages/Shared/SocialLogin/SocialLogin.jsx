import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { signInGoogle } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from,{replace:true})
            }).catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleLogin} className="btn  btn-outline ">
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
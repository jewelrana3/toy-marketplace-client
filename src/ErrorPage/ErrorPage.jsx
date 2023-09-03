import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-40 mb-20">
            <h2 className="text-4xl text-red-500">404</h2>
            <p className="text-5xl text">Page Not Found</p>
           
           <Link to='/'> <button className="btn btn-primary mt-20">GO TO HOME PAGE</button></Link>
        </div>
    );
};

export default ErrorPage;
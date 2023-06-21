import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" items-center mt-12 ml-40 mb-20">
            <img className="w-[60rem]" src="https://i.ibb.co/ZYdS7fL/image-processing20191213-8358-15e0fio.gif" alt="" />
           <Link to='/'> <button className="btn btn-primary mt-20">GO TO HOME PAGE</button></Link>
        </div>
    );
};

export default ErrorPage;
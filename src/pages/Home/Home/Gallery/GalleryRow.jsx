import { Link } from "react-router-dom";


const GalleryRow = ({ gallery }) => {
    const {_id, title, price, rating, photo_url } = gallery;
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold text-red-300">Price:${price}</p>
                <div className="card-actions">
                   <Link to={`/details/${_id}`}> <button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GalleryRow;
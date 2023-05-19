import { Link } from "react-router-dom";


const GalleryRow = ({ gallery }) => {
    const {_id, name, price, rating, photo_url } = gallery;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={photo_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price:{price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GalleryRow;
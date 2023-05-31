import { Link } from "react-router-dom";


const ShopCategory = ({item}) => {
    const {_id,name,price,rating,image} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-10">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-left font-semibold">Price:${price}</p>
                <p className="text-left font-semibold">Rating: {rating}</p>
                <div className="card-actions justify-start">
                   <Link to={`details/${_id}`}> <button className="btn btn-outline w-full">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;
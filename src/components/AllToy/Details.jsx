import { useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();

    const { picture, toyname, price, email, rating, category, quantity, sellername, description } = details;
    return (
        <div className="pt-20">
            <h2 className="text-3xl text-center">Here are the details of the products</h2>
            <div className="flex mt-10">
                <img style={{width:'400px'}} src={picture} alt="" />
                <div className="mt-14 ml-10">
                    <h1 className="text-2xl font-bold">{toyname}</h1>
                    <h2 className="mt-4 text-2xl font-serif">Seller Info</h2>
                    <p className="mt-4">Name: {sellername}</p>
                    <p>Email: {email}</p>
                    <h2 className="mt-4 text-2xl">Product Info</h2>
                    <p className="mt-4">Rating: {rating}</p>
                    <p>Avilable quantity: {quantity}</p>
                    <p>Category: {category}</p>
                    <h2>Price: {price}</h2>
                    <p className="mt-8 mb-8 border-solid border-2 p-8 rounded border-indigo-600">{description}</p>
                </div>

            </div>
        </div>
    );
};

export default Details;
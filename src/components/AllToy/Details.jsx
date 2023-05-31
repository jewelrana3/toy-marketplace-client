import { useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    console.log(details)
    const { picture, price, category, quantity, sellername,name  } = details;
    return (
        <div className="pt-40">
            <h2 className="text-3xl text-center">Here are the details of the products</h2>
          
                <h2 className="text-2xl font-bold">dd{}</h2>
            <div>
              <h2>length:{details.lenght}</h2>
                <h2>SellerName :{sellername}</h2>
                <p>{details.price}</p>
            </div>
        </div>
    );
};

export default Details;
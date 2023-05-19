import { useLoaderData } from "react-router-dom";


const DetailsPag = () => {
    const details = useLoaderData()
    return (
        <div>
            <h2>Book now baby:{details.name}</h2>
        </div>
    );
};

export default DetailsPag;
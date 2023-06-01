// import { useLoaderData } from "react-router-dom";
// import useShop from "../../hooks/useShop";
import { useEffect, useState } from "react";


const Mytoy = () => {
    const [mytoy,setMytoy] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:4000/alltoy')
        .then(res=>res.json())
        .then(data=>{
            setMytoy(data)
            console.log(data)
        })
    },[])
    return (
        <div className="pt-20">
           <div>
            {
                mytoy.map(item=><li
                key={item._id}
                ><h2>Price:{item.price}</h2></li>)
            }
           </div>
        </div>
    );
};

export default Mytoy;
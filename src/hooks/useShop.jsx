import { useEffect, useState } from "react";


const useShop = () => {
    const [shop,setShop] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/alltoy')
        .then(res=>res.json())
        .then(data=>{
            setShop(data)
            console.log(data)
        })
    },[])
    return [shop]

    
};

export default useShop;
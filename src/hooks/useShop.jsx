import { useEffect, useState } from "react";


const useShop = () => {
    const [shop,setShop] = useState([])
    useEffect(()=>{
        fetch('https://server-assignment-11-two.vercel.app/alltoy')
        .then(res=>res.json())
        .then(data=>{
            setShop(data)
           
        })
    },[])
    return [shop]

    
};

export default useShop;
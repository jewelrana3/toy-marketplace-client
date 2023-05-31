import { useEffect, useState } from "react";


const useShop = () => {
    const [shop,setShop] = useState([])
    useEffect(()=>{
        fetch('/shop.json')
        .then(res=>res.json())
        .then(data=>{
            setShop(data)
        })
    },[])
    return [shop]

    
};

export default useShop;
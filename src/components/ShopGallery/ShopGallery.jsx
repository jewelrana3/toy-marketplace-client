import  { useEffect } from 'react';

const ShopGallery = () => {
    useEffect(()=>{
        fetch('/shop.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ShopGallery;
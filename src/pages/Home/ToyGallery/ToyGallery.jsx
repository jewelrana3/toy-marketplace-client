import { useEffect, useState } from "react";
import ToyGalleryRow from "./ToyGalleryRow";


const ToyGallery = () => {
    const [images,setImages] = useState([]);

    useEffect(()=>{
        fetch('gallery.json')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])
    return (
        <div className="text-center mt-40">
            <h2 className="text-5xl font-thin">Toy Gallery</h2>
            <p className="mt-10">Welcome to Edu Toy Gallery: Where Learning and Play Come Together!<br></br>
                Our carefully curated collection features toys that combine fun and learning seamlessly.</p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {
                    images.map(image=><ToyGalleryRow
                    key={image._id}
                    image={image}
                    ></ToyGalleryRow>)
                }
            </div>
        </div>
    );
};

export default ToyGallery;
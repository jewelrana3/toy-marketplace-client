import { useEffect, useState } from "react";
import GalleryRow from "./GalleryRow";


const Gallery = () => {
    const [gallerys, setGallery] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/allData')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className=" text-5xl mt-4">New Collection</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod temp.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                {
                    gallerys.map(gallery => <GalleryRow
                    key={gallery.name}
                    gallery={gallery}
                    ></GalleryRow>)
                }
            </div>
        </div>
    );
};

export default Gallery;
import { useEffect, useState } from "react";
import GalleryRow from "./GalleryRow";


const Gallery = () => {
    const [gallerys, setGallerys] = useState([])

    useEffect(() => {
        fetch('https://server-assignment-11-jlaeos6ed-jewelrana3.vercel.app/child')
            .then(res => res.json())
            .then(data => setGallerys(data))
    }, [])
    return (
        <div className="mb-8">
            <div className="text-center">
                <h2 className=" text-5xl mt-4">New Collection</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod temp.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gallerys.map(gallery => <GalleryRow
                    key={gallery._id}
                    gallery={gallery}
                    ></GalleryRow>)
                }
            </div>
        </div>
    );
};

export default Gallery;
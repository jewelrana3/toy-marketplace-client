

const ToyGalleryRow = ({ image }) => {
    const { img } = image;
    return (
        // <div className="card  w-96 bg-base-100 shadow-xl">
        //     <figure><img src={img} alt="Shoes" /></figure>
        // </div>
        <div className="mx-auto">
            <img style={{width:'200px', height:'200px'}} src={img} alt="" />
            <hr />
        </div>
    );
};

export default ToyGalleryRow;
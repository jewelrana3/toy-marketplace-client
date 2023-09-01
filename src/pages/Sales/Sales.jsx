import { Helmet } from "react-helmet-async";


const Sales = () => {
    return (
        <>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <div className="px-2 pt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div className="card  glass ">
                    <figure><img src="https://i.ibb.co/5BRfgQs/istockphoto-1069600900-612x612.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swimsuit with Ruffles</h2>
                        <p>$13.00</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Options</button>
                        </div>
                    </div>
                </div>
                <div className="card gap-8 glass ">
                    <figure><img src="https://i.ibb.co/9qRLd3S/istockphoto-1359811855-612x612.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swimsuit with Ruffles</h2>
                        <p>$13.00</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Options</button>
                        </div>
                    </div>
                </div>
                <div className="card  glass ">
                    <figure><img src="https://i.ibb.co/17Xs4Zg/istockphoto-539350870-612x612.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swimsuit with Ruffles</h2>
                        <p>$13.00</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Options</button>
                        </div>
                    </div>
                </div>
                <div className="card  glass ">
                    <figure><img src="https://i.ibb.co/M57sVjp/istockphoto-1196393819-612x612.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swimsuit with Ruffles</h2>
                        <p>$13.00</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Options</button>
                        </div>
                    </div>
                </div>
                <div className="card  glass ">
                    <figure><img src="https://i.ibb.co/GMLB4TF/istockphoto-939438514-612x612.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swimsuit with Ruffles</h2>
                        <p>$13.00</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Options</button>
                        </div>
                    </div>
                </div>
                <div className="card  glass ">
                    <figure><img src="https://i.ibb.co/KKmgKnj/istockphoto-1097258406-612x612.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swimsuit with Ruffles</h2>
                        <p>$13.00</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Options</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sales;
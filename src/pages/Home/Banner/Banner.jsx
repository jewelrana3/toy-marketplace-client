

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] bottom-0">
            <div id="slide1" className="carousel-item relative w-full ">
                <img className="rounded-lg w-full" src="https://i.ibb.co/BTq874z/amireza-mirhosseini-u73-Hx-P4bfs-E-unsplash.jpg" />
                <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className=' text-5xl font-semibold'>Pecially formulated to be gentle, non-irritating</h2>
                        <p>These products are mainly concerned with keeping the baby clean and comfortable.</p>
                        <div>
                            <button className="btn btn-active btn-accent mr-5">Baby More</button>
                            <button className="btn btn-outline btn-info">New Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img  className="rounded-lg w-full" src="https://i.ibb.co/DLTpXVg/g-2.jpg"  />
                <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className=' text-5xl font-semibold'>Pecially formulated to be gentle, non-irritating</h2>
                        <p>These products are mainly concerned with keeping the baby clean and comfortable.</p>
                        <div>
                            <button className="btn btn-active btn-accent mr-5">Child More</button>
                            <button className="btn btn-outline btn-info">Baby Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img  className="rounded-lg w-full" src="https://i.ibb.co/BTq874z/amireza-mirhosseini-u73-Hx-P4bfs-E-unsplash.jpg"  />
                <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className=' text-5xl font-semibold'>Pecially formulated to be gentle, non-irritating</h2>
                       <p>These products are mainly concerned with keeping the baby clean and comfortable.</p>
                        <div>
                            <button className="btn btn-active btn-accent mr-5">child More</button>
                            <button className="btn btn-outline btn-info">New Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img  className="rounded-lg w-full" src="https://i.ibb.co/DLTpXVg/g-2.jpg"  />
                <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className=' text-5xl font-semibold'>Pecially formulated to be gentle, non-irritating</h2>
                       <p>These products are mainly concerned with keeping the baby clean and comfortable.</p>
                        <div>
                            <button className="btn btn-active btn-accent mr-5">Child More</button>
                            <button className="btn btn-outline btn-info">New Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
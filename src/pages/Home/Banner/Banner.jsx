

import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/3.jpg'

import './Banner.css'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-2/3 ml-8'>
                        <h2 className='text-xl flex  lg:text-5xl text-left  font-semibold'>Where Curiosity Thrives, Learning Flourishes - LearnPlay Haven</h2>
                       
                        <div className='min-w-400 flex'>
                            <button className="explore btn btn-active btn-accent mr-5">Expolore</button>
                            <button className="explore btn btn-outline btn-info">Gallery</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-2/3 ml-8'>
                        <h2 className='min-w-400  text-xl flex  lg:text-5xl text-start font-semibold'>Where Curiosity Thrives, Learning Flourishes - LearnPlay Haven</h2>
                       
                        <div className='min-w-400 flex'>
                            <button className="btn btn-active btn-accent mr-5">Expolore</button>
                            <button className="btn btn-outline btn-info">Gallery</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-2/3 ml-8'>
                        <h2 className='min-w-400  text-xl flex  lg:text-5xl text-start  font-semibold'>Where Curiosity Thrives, Learning Flourishes - LearnPlay Haven</h2>
                       
                        <div className='min-w-400 flex'>
                            <button className="btn btn-active btn-accent mr-5">Expolore</button>
                            <button className="btn btn-outline btn-info">Gallery</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
         
        </div>
    );
};

export default Banner;
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";

import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/3.jpg'


const Banner = () => {
    return (
        <>
            <Swiper
                dir="rtl"
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper h-[600px]"
            >
                <SwiperSlide>
                    <img className="w-full" src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                    
                    <img  className="w-full" src={img2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={img3} alt="" />
               
                </SwiperSlide>
               
            </Swiper>
        </>
    );
};

export default Banner;
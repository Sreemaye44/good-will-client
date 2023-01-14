import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from '../../../../assets/img1.avif';
import img2 from '../../../../assets/img2.avif';


const HomeSlider = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiperclass"
      >
                <SwiperSlide>
                        
                    <div className="relative">
                        <img src="https://cdn.shopify.com/s/files/1/0579/6560/9123/files/Uptot_Home_Page_Banner_2_Size_1281x623px_2x-100_2x_0e16f9b8-3480-4688-b026-a063d3e83ef5_1950x.png?v=1630399395&quot" alt="" />
                        <div className="space-y-3 absolute top-[25%] left-[8rem]">
                            <h3 className="text-5xl text-left font-semibold text-pink-600">New and Preloved</h3>
                            <h3 className="text-5xl text-left font-semibold text-pink-600">products for tiny tots!</h3>
                            <p className="text-left absolute top-[25%]">We are organized and verified marketplace to sell</p>
                            <p className="text-left absolute top-[50%]">toys, furniture and so more. A community created by</p>
                            <p className="text-left absolute top-[75%]">parents for parents to make parenting less </p>
                            <p className="text-left absolute">challenging and more rewarding</p>
                            <button className="btn absolute top-[225%] left-[0%] bg-gradient-to-r from-emerald-300 to-pink-300 rounded-md">sell with us</button>
                        </div>
                    </div>
                   
                </SwiperSlide>
                <SwiperSlide>
                        
                    <div className="relative">
                        <img src="https://cdn.shopify.com/s/files/1/0579/6560/9123/files/shutterstock_1811375659_e_2x_2dbaa4ed-8fe6-41db-915b-001c29d7f926_1024x1024.png?v=1628692281" alt="" />
                        <div className="space-y-3 absolute top-[25%] left-[8rem]">
                            <h3 className="text-5xl text-left font-semibold text-purple-600">New and Preloved</h3>
                            <h3 className="text-5xl text-left font-semibold text-purple-600">products for tiny tots!</h3>
                            <p className="text-left absolute top-[25%]">We are organized and verified marketplace to sell</p>
                            <p className="text-left absolute top-[50%]">toys, furniture and so more. A community created by</p>
                            <p className="text-left absolute top-[75%]">parents for parents to make parenting less </p>
                            <p className="text-left absolute">challenging and more rewarding</p>
                            <button className="btn absolute top-[225%] left-[0%] bg-gradient-to-r from-purple-300 to-pink-300 rounded-md">sell with us</button>
                        </div>
                    </div>
                   
                </SwiperSlide>
                <SwiperSlide>
                        
                    <div className="relative">
                        <img src="https://cdn.shopify.com/s/files/1/0579/6560/9123/files/Group_2563_2x_d00da083-2c16-4424-8dac-028aaad5a33b_1024x1024.png?v=1630399671" alt="" />
                        <div className="space-y-3 absolute top-[25%] right-[8rem]">
                            <h3 className="text-5xl text-left font-semibold text-emerald-600">New and Preloved</h3>
                            <h3 className="text-5xl text-left font-semibold text-emerald-600">products for tiny tots!</h3>
                            <p className="text-left absolute top-[25%]">We are organized and verified marketplace to sell</p>
                            <p className="text-left absolute top-[50%]">toys, furniture and so more. A community created by</p>
                            <p className="text-left absolute top-[75%]">parents for parents to make parenting less </p>
                            <p className="text-left absolute">challenging and more rewarding</p>
                            <button className="btn absolute top-[225%] left-[0%] bg-gradient-to-r from-emerald-300 to-pink-300 rounded-md">sell with us</button>
                        </div>
                    </div>
                   
                </SwiperSlide>
                {/* <SwiperSlide>
                        
                    <img src= alt=""/>
                   
                  
                </SwiperSlide>
                <SwiperSlide>
                        
                    <img src= alt=""/>
                   
                  
                </SwiperSlide> */}
               
   
      </Swiper>
        </div>
    );
};

export default HomeSlider;
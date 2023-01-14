import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Add.css";

// import required modules
import { EffectCoverflow,Autoplay, Pagination } from "swiper";
import { useEffect } from "react";
import axios from 'axios';

const Add = () => {
    const [advertise, setAdvertise] = useState([]);
    useEffect(() => {
        axios.get('https://goodwill-store-server.vercel.app/products/advertise',
        {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(data => {
               const advertiseLoaded=data.data;
                setAdvertise(advertiseLoaded);
        });
    })
    return (
        <>
            <div className="bg-pink-200 p-12">
                <Marquee speed='90' gradientColor="false" className="text-4xl font-bold text-center text-emerald-600 ">Deals of the Week</Marquee></div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          
                slidesPerView={"auto"}
                autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow,Autoplay, Pagination]}
          className="mySwiper"
            >
                {
                    advertise.map(ad=><SwiperSlide>
                        <div className="relative">
                            <img className='' src={ad.imageURL} alt='' />
                            <div className="">
                                <button className=" bg-red-500 py-3 text-white absolute top-[2%] right-[2%] badge">50% OFF</button>
                                <button className=" bg-purple-500 p-3 text-white absolute bottom-[2%] left-[2%] badge">{ad.quality}</button>
                                
                            </div>
                            
                        </div>
                        
          </SwiperSlide>)
                }
          
          
        </Swiper>
      </>
    );
};

export default Add;
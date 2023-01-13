import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Add.css"


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

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
           
            <Swiper
               
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
            >
                 {
                advertise.map(ad=><div><SwiperSlide>
          <img src={ad.imageURL} alt='' />
        </SwiperSlide></div>)
            }
      </Swiper>
    </>
    );
};

export default Add;
import React from 'react';
import img1 from '../../../../assets/img1.avif';
import img2 from '../../../../assets/img2.avif';
import img3 from '../../../../assets/img3.avif';
import img4 from '../../../../assets/img4.avif';
import img5 from '../../../../assets/img5.avif';
import img6 from '../../../../assets/img6.avif';
import './Banner.css';
import BannerItem from './BannerItem';
const Banner = () => {
    const bannerData=[
    {
        image: img1,
        prev: 6,
        id:1,
        next:2
       },
       {
        image: img2,
        prev: 1,
        id:2,
        next:3
       },
       {
        image: img3,
        prev: 2,
        id:3,
        next:4
       },
       {
        image: img4,
        prev: 3,
        id:4,
        next:5
       },
       {
        image: img5,
        prev: 4,
        id:5,
        next:6
       },
       {
        image: img6,
        prev: 5,
        id:6,
        next:1
       }
    
    ]
    return (
        <div className="carousel w-full">
        {
           bannerData.map(slide=><BannerItem
           key={slide.id} slide={slide}></BannerItem>)
        }
</div>
    );
};

export default Banner;
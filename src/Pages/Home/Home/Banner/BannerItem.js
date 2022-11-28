import React from 'react';

const BannerItem = ({slide}) => {
    const{image, prev, next, id}=slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
        <div className='carousel-img'>
        <img src={image}  alt='' className="w-screen h-screen rounded-lg" />
        </div>
           <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-5xl font-bold text-white'>Trust us with your money and child
            </h1>
          </div>
      
          <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <button className="btn btn-primary mr-5">Get Started Now</button>
          </div>
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-20 bottom-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle btn-primary mr-5">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle btn-primary">❯</a>
          </div>
        </div> 
    );
};

export default BannerItem;
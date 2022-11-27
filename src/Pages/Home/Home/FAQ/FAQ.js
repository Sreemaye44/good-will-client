import React from 'react';
import photo from '../../../../assets/resale-concept-big-word-text-260nw-1513710023.webp'


const FAQ = () => {
    return (
        <div className="hero bg-base-200 mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <img src={photo} className="rounded-lg h-full shadow-2xl" alt='' />
          
          <div className='mr-10'>
            <h1 className="text-3xl font-bold my-5 text-secondary">Frequently Asked Questions</h1>
            <h2 className='font-semibold text-xl'>Why I should resale products? </h2>
            <p className="py-3">The products you have bought for your baby, did not use much, you can sell them and got some money, your space is saved and also help other people.</p>
            <h2 className='font-semibold text-xl'>Why I should buy used products? </h2>
            <p className="py-3">The things you will gonna use one or two times, you can buy those things from others who is not using them anymore</p>
            <button className="btn btn-primary my-5">Sign Up Now!</button>
          </div>
        </div>
      </div>
    );
};

export default FAQ;
import React from 'react';

const Review = () => {
    return (
        <div className='bg-purple-100 m-20 py-10 rounded-xl'>
            <h1 className="text-4xl p-12 font-bold text-center text-emerald-600">Hear from fellow Good-willers</h1>
            <div className='grid grid-cols-2 gap-20 text-center px-24 pb-12 leading-loose'>
                <div>
                <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                </div>
                    <p>I’ve experienced Uptot as both a buyer and a seller, and I’ve been blown away by the level of customer service, attention to detail, and variety of products available. So happy to be able to enjoy shopping while knowing I’m doing my bit to contribute to sustainability!</p>
                    <p>-Esha</p>
           </div>
                <div>
                <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                </div>
                    <p>I’ve experienced Uptot as both a buyer and a seller, and I’ve been blown away by the level of customer service, attention to detail, and variety of products available. So happy to be able to enjoy shopping while knowing I’m doing my bit to contribute to sustainability!</p>
                    <p>-Esha</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
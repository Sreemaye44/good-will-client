import React from 'react';

const WhyStart = () => {
    return (
        <div>
            <h1 className="text-4xl p-12 font-bold text-center text-emerald-600">Why did we start Good-will store?</h1>
            <div className='grid grid-cols-3 bg-emerald-100 px-24 py-16 text-center'>
                <div className='px-16 leading-loose '>
                    <img src="https://cdn.shopify.com/s/files/1/0579/6560/9123/files/Group_287.svg?v=1628803272" className='mx-auto' alt="" srcset="" />
                    <h1 className='font-semibold text-lg py-3 text-emerald-700'>Parents for parents</h1>
                    <p>An e-commerce platform created for parents by parents, every aspect of good will store has been meticulously created to deliver what's best for your kids, you and the planet</p>
                </div>
                <div className='px-16 leading-loose'>
                    <img src="https://cdn.shopify.com/s/files/1/0579/6560/9123/files/Group_288.svg?v=1628803272" className='mx-auto' alt="" srcset="" />
                    <h1 className='font-semibold text-lg py-3 text-emerald-700'>Sharing the love</h1>
                    <p>We are building a wide circle of sharing and caring that fosters a more wholesome life for modern-day families. In short, a support system of parents who truly care.</p>
                </div>
                <div className='px-16 leading-loose '>
                    <img src="https://cdn.shopify.com/s/files/1/0579/6560/9123/files/Group_289.svg?v=1628803272" className='mx-auto' alt="" srcset="" />
                    <h1 className='font-semibold text-lg py-3 text-emerald-700'>A better world</h1>
                    <p>We encourage sustainable living from one home to another. In doing this, we are not just providing a planet-friendly alternative, we are creating a culture of mindful coexistence.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyStart;
import React from 'react';
import Review from '../Review/Review';
import WhyStart from '../WhyStart/WhyStart';
import Add from './Advertise/Add';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import HomeSlider from './Banner/HomeSlider';
import Benifits from './Benifits/Benifits';
import Categories from './Categories/Categories';
import FAQ from './FAQ/FAQ';

const Home = () => {
    return (
        <div className='w-full'>
            {/* <Banner></Banner> */}
           
            <HomeSlider></HomeSlider>
            {/* <Advertise></Advertise> */}
             <Add></Add> 
            <Categories></Categories>
            
            <WhyStart></WhyStart>
            <Review></Review>
            <Benifits></Benifits>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
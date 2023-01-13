import React from 'react';
import Add from './Advertise/Add';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import FAQ from './FAQ/FAQ';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            {/* <Advertise></Advertise> */}
            <Add></Add>
            <Categories></Categories>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
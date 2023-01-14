import React, { createContext, useEffect, useState } from 'react';
import Category from './Category';
export const MyContext=createContext('');

const Categories = () => {
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://goodwill-store-server.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>{
            //console.log(data)
            setCategories(data);        
        })
    },[])
    return (
        <div>
            <h1 className="text-4xl p-12 font-bold text-center text-emerald-600">Shop Our Collections</h1>
        <div className=' mx-24 grid lg:grid-cols-3 gap-20 py-20'>
            {
                categories.map(category=><Category 
                id={category._id}
                category={category}
                ></Category>)
        
         }
            </div>
            </div>
    );
};

export default Categories;
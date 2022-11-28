import React, { createContext, useEffect, useState } from 'react';
import Category from './Category';
export const MyContext=createContext('');

const Categories = () => {
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>{
            //console.log(data)
            setCategories(data);        
        })
    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-20 py-20'>
            {
                categories.map(category=><Category 
                id={category._id}
                category={category}
                ></Category>)
        
         }
        </div>
    );
};

export default Categories;
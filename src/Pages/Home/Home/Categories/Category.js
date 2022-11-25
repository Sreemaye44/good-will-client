import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../AllProducts/BookingModal/BookingModal';

const Category = ({category,id}) => {
    return (
        <Link to={{
          pathname: `/products/${id}`,
          state: { test:"test" }
          }}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className='h-52 w-full' src={category.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-center font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{category.categoryName}</h2>
        </div>
      

      </div>
      
      </Link>
  
    );
};

export default Category;
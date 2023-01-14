import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../AllProducts/BookingModal/BookingModal';

const Category = ({category,id}) => {
    return (
        <Link to={{
          pathname: `/products/${id}`,
          state: { test:"test" }
          }}>
        <div className=" w-96 bg-base-100">
        <figure><img className='h-64 rounded-lg transform transition duration-500 hover:scale-110 w-full' src={category.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-center font-semibold text-transparent text-2xl bg-clip-text  bg-emerald-600 rounded-md">{category.categoryName}</h2>
        </div>
      

      </div>
      
      </Link>
  
    );
};

export default Category;
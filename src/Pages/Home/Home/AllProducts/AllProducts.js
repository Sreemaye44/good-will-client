
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';
import BookingModal from './BookingModal/BookingModal';

const AllProducts = () => {
    
    const [singleProduct,setSingleProduct]=useState(null);
    const location = useLocation();
    const categoryId = location.pathname.split("/").at(2);

    const url=`https://goodwill-store-server.vercel.app/products/category/${categoryId}`;

    const {data: products=[], isLoading,refetch}=useQuery({
        queryKey: [],
        queryFn: async()=>{
            const res= await fetch(url);
            const data = await res.json();
         
            return data;
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    
   
    return (
        <div className='grid grid-cols-3 gap-5'>
          {products.map(product=>
            <div product={product} key={product._id} className="card  bg-neutral shadow-xl">
  <figure><img src={product.imageURL} className='w-full h-72' alt="Album"/></figure>
  <div className="card-body">
         <div className='flex justify-between'>
      <h2 className="card-title">Product Name: {product.productName}</h2>
     <h2 className='text-2xl'>{product?.user_info[0]?.verify && <FaCheck className='text-blue-600'></FaCheck>}</h2>
  </div>
    <p>Description: {product.description}</p>
    <div className='grid grid-cols-2 gap-3'>
    <p>Condition: {product.quality}</p>
    <p>Pickup point: {product.location}</p>
    <p>Original Price: Tk {product.originalPrice}</p>
    <p>Current Price: Tk {product.resalePrice}</p>
    
    <p>Contact: {product.phone}</p>

    </div>
    <div className="card-actions justify-end">
      <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=>setSingleProduct(product)}>Book Now!</label>
    </div>
  </div>
</div>
)}

{singleProduct&&
    <BookingModal 
 singleProduct={singleProduct}
 setSingleProduct={setSingleProduct}
 refetch={refetch}>

 </BookingModal>}
        </div>
    );
};

export default AllProducts;
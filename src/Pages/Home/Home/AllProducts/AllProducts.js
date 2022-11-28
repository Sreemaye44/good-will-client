
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaCheck, FaHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import BookingModal from './BookingModal/BookingModal';

const AllProducts = () => {
  const { user } = useContext(AuthContext);
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
  const handleWishList = (product) => {
    const wishedProduct = {
      email: user.email,
      name: product.productName,
      price: product.resalePrice,
      categoryId: product.categoryId,
      image: product.imageURL


    }
    fetch('https://goodwill-store-server.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishedProduct)
        })
        .then(res=>res.json())
        .then(data=>{
          swal('Added to your wishlist!');
          
            
        })
  }
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric",hour:"2-digit",minute:"2-digit"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

    
   
    return (
        <div className='grid lg:grid-cols-3 gap-5 mb-5'>
        { products&&
          products.map(product =>
            <div product={product} key={product._id} className="card  bg-neutral shadow-xl">
  <figure><img src={product?.imageURL} className='w-full h-72' alt="Album"/></figure>
  <div className="card-body">
         <div className='flex justify-between'>
      <h2 className="card-title">Product Name: {product?.productName}</h2>
     <h2 className='text-2xl'>{product?.user_info[0]?.verify && <FaCheck className='text-blue-600'></FaCheck>}</h2>
                </div>
                <p> {formatDate(product.createdAt)}</p>
    <p>Description: {product?.description}</p>
    <div className='grid grid-cols-2 gap-3'>
    <p>Condition: {product?.quality}</p>
    
    <p>Pickup point: {product?.location}</p>
    <p>Original Price: Tk {product?.originalPrice}</p>
    <p>Current Price: Tk {product?.resalePrice}</p>
    
    <p>Contact: {product.phone}</p>

    </div>
       <div className="card-actions justify-between">
                  <button onClick={() => handleWishList(product)}><FaHeart></FaHeart></button>
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
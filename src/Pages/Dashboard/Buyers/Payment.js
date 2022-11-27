import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import Loader from '../../Home/Home/Shared/Loader/Loader';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const data = useLoaderData();
    const navigation=useNavigation();
    const {itemName,itemPrice,image}=data
    if(navigation.state==="loading"){
        return <Loader></Loader>
    }
   
    return (
        <div className="card w-96 bg-neutral shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">You have booked {itemName}</h2>
    <p>To confirm, Please pay TK{itemPrice}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Payment;
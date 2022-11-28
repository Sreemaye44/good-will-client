import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import Loader from '../../Home/Home/Shared/Loader/Loader';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData();
    const navigation=useNavigation();
    const {itemId,itemName,itemPrice,image}=booking
    if(navigation.state==="loading"){
        return <Loader></Loader>
    }
   
    return (
        <div className="card w-1/2 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center ">
    <h2 className="card-title">You have booked {itemName}</h2>
    <p>To confirm, Please pay TK{itemPrice}</p>
    <div className="w-96 my-12">
            <Elements stripe={stripePromise}>
              <CheckoutForm 
               booking={booking}
              />
      </Elements>
    </div>
  </div>
</div>
    );
};

export default Payment;
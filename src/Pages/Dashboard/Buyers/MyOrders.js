import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../Home/Home/Shared/Loader/Loader';

const MyOrders = () => {
    const {user}=useContext(AuthContext);
    const [orders, setOrders]=useState([]);
    const url=`http://localhost:5000/bookings?email=${user?.email}`;

    const {data:myOrders,isLoading, refetch}=useQuery({
        queryKey: [user?.email],
        queryFn: async()=>{
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
              const data = await res.json();
              console.log(data);
                    return data
                             
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    const handlePayment = (id) => {
        
    }
    return (
        <div>
           <h2 className='text-3xl text-center mb-5'>My Orders</h2>
        <div className="overflow-x-auto">
<table
 className="table w-full">
<thead>
  <tr>
    <th></th>
    <th>Avatar</th>
    <th>Name</th>
    <th>Price</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
 {
    myOrders.map((myOrder,i)=>
        <tr key={myOrder._id}>
    <th>{i+1}</th>
    <td><div className="avatar">
<div className="w-24 rounded-full">
<img src={myOrder.image} alt=""/>
</div></div></td>
    <td>{myOrder.itemName}</td>
    <td>{myOrder.itemPrice}</td>
    <td>
                {
                    myOrder.itemPrice && !myOrder.paid && 
                   <Link to={`/dashboard/payment/${ myOrder._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link>
                }
                {
                    myOrder.itemPrice && myOrder.paid && 
                    <span className='text-primary'>Paid</span>
                }
    </td>
  </tr>

    )
 }
 

 
</tbody>
</table>
</div>

        </div>
    );
};

export default MyOrders;
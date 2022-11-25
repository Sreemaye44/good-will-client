import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../Home/Home/Shared/Loader/Loader';

const MyProduct = () => {
    const {user}=useContext(AuthContext);
    const [orders, setOrders]=useState([]);
    const url=`http://localhost:5000/my-products?email=${user?.email}`;

    const {data:myProducts,isLoading, refetch}=useQuery({
        queryKey: [user?.email],
        queryFn: async()=>{
            const res= await fetch(url);
              const data = await res.json();
              console.log(data);
                    return data
                    
                    
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    const handleStatusUpdate= id=>{
        fetch(`http://localhost:5000/my-products/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'SOLD'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            refetch();
            const remaining=orders.filter(odr=>odr._id!==id)
            const approving=orders.find(odr=>odr._id===id);
            approving.status='SOLD';
        
            const newOrders=[...remaining, approving];
            setOrders(newOrders)
           
        }
    })
}

    return (
        <div className>
        <h2 className='text-3xl text-center mb-5'>Added Products</h2>
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
    <th>Action</th>
  </tr>
</thead>
<tbody>
 {
    myProducts.map((myProduct,i)=>
        <tr key={myProduct._id}>
    <th>{i+1}</th>
    <td><div className="avatar">
<div className="w-24 rounded-full">
<img src={myProduct.imageURL} alt=""/>
</div></div></td>
    <td>{myProduct.productName}</td>
    <td>{myProduct.resalePrice}</td>
    <td>
    <button onClick={()=>handleStatusUpdate(myProduct._id)}  className='btn btn-sm'>{myProduct.status? myProduct.status: 'UNSOLD'}</button>
    </td>
    <td>
    {
        !myProduct.status &&
        <button className='btn btn-sm btn-primary'>Advertise</button>
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

export default MyProduct;
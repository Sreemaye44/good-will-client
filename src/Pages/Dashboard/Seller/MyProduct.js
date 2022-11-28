import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../Home/Home/Shared/Loader/Loader';

const MyProduct = () => {
    const {user}=useContext(AuthContext);
    const [orders, setOrders]=useState([]);
    const url=`https://goodwill-store-server.vercel.app/my-products?email=${user?.email}`;

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
        fetch(`https://goodwill-store-server.vercel.app/my-products/${id}?status=SOLD`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
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
const handleDelete=(id)=>{
    fetch(`https://goodwill-store-server.vercel.app/my-products/${id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            refetch();
            swal('This buyer is deleted successfully');
        }
       
    })
}
const handleAdvertiseUpdate=(id)=>{
    fetch(`https://goodwill-store-server.vercel.app/my-products/${id}?advertiseEnable=true`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        refetch();
        swal('Advertised you product successfully');
    })
}

    return (
        <div>
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
    <th>Advertise</th>
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
    <button onClick={()=>handleDelete(myProduct._id)}  className='btn btn-sm bg-red-600 text-white'>Delete</button>
    </td>
    <td>
    {
        !myProduct.advertiseEnable?
                        <button onClick={() => handleAdvertiseUpdate(myProduct._id)} className='btn btn-sm btn-primary'>Advertise</button> :
                        <FaCheck></FaCheck>
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
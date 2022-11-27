import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../Home/Home/Shared/Loader/Loader';

const AllBuyers = () => {
   const {user}=useContext(AuthContext);
    const url='https://goodwill-store-server.vercel.app/users/user-type/Buyer';

    const {data:buyers,isLoading, refetch}=useQuery({
        queryKey: [],
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
    const handleDelete=(id)=>{
        fetch(`https://goodwill-store-server.vercel.app/users/${id}`,{
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
    return (
        <div>
        <h2 className='text-3xl text-center mb-5'>Buyers List</h2>
        <div className="overflow-x-auto">
<table
 className="table w-full">
<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
 {
    buyers.map((buyer,i)=>
        <tr key={buyer._id}>
    <th>{i+1}</th>
    <td>{buyer.name}</td>
    <td>{buyer.email}</td>
    <td>
    <button onClick={()=>handleDelete(buyer._id)}  className='btn btn-sm'>Delete</button>
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

export default AllBuyers;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../Home/Home/Shared/Loader/Loader';

const AllSellers = () => {
   const {user}=useContext(AuthContext);
   //const [verification, setVerification]=useState([]);
    const url='http://localhost:5000/users/user-type/Seller';

    const {data:sellers,isLoading, refetch}=useQuery({
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

        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                refetch();
                swal('This seller is deleted successfully');
            }
           
        })
    }
    const handleVerify= id=>{
        fetch(`http://localhost:5000/users/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({verify: 'Verified'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            refetch();
        }
    })

}

    return (
        <div>
        <h2 className='text-3xl text-center mb-5'>Sellers List</h2>
        <div className="overflow-x-auto">
<table
 className="table w-full">
<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
    <th>Verify</th>
  </tr>
</thead>
<tbody>
 {
    sellers.map((seller,i)=>
        <tr key={seller._id}>
    <th>{i+1}</th>
    <td>{seller.name}</td>
    <td>{seller.email}</td>
    <td>
    <button onClick={()=>handleDelete(seller._id)}  className='btn btn-sm'>Delete</button>
    </td>
    <td>
    <button onClick={()=>handleVerify(seller._id)}  className='btn btn-sm'>{seller.verify? <FaCheck className='text-blue-700'></FaCheck> : 'Verify'}</button>
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

export default AllSellers;
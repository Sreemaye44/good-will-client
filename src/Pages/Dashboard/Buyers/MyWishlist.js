import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../Home/Home/Shared/Loader/Loader';

const MyWishlist = () => {
    const {user}=useContext(AuthContext);
    const url=`https://goodwill-store-server.vercel.app/wishlist?email=${user?.email}`;

    const {data:myWishList,isLoading, refetch}=useQuery({
        queryKey: [user?.email],
        queryFn: async()=>{
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
              const data = await res.json();
                    return data
                             
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
        <h2 className='text-3xl text-center mb-5'>My WishList</h2>
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
                            myWishList.map((wl, i) =>
        <tr key={wl._id}>
    <th>{i+1}</th>
    <td><div className="avatar">
<div className="w-24 rounded-full">
<img src={wl.image} alt=""/>
</div></div></td>
    <td>{wl.name}</td>
                                    <td>{wl.price}</td>
                                    <td><Link to={`/products/${wl.categoryId}`}><button className='btn btn-sm btn-primary'>BUY</button></Link></td>
                                    </tr>
                                    
                            )}
                    
</tbody>
</table>
</div>

     </div>
    );
};

export default MyWishlist;
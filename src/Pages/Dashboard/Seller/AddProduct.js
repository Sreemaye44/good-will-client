import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const categories=useLoaderData();
    const {user}=useContext(AuthContext);
    
    const handleAddProduct=(event)=>{
        event.preventDefault();
        const form=event.target;
        const productName =form.productName.value;
        const imageURL =form.imageURL.value;
        const originalPrice =form.originalPrice.value;
        const resalePrice =form.resalePrice.value;
        const location =form.location.value;
        const useYear =form.useYear.value;
        const phone=form.phone.value;
        const categoryId=form.categoryId.value;
        const quality=form.quality.value;
        const description =form.description.value;
        console.log(categoryId, quality,user.email);

         const addProduct={
             productName,
             imageURL,
             originalPrice,
             resalePrice,
             location,
             useYear,
             phone,
             categoryId,
             quality,
             description,
             createdBy: user.email
        }
        fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(addProduct)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.acknowledged){
      swal('successfully product added!')
      form.reset();
    }
    console.log(data)})
  .catch(er=>console.error(er))

    }

    return (
        <div className='p-10 bg-neutral'>
        <form onSubmit={handleAddProduct} className='w-3/4 mx-auto'>
        <h1 className='text-3xl font-semibold text-secondary'>Add a Product</h1>
          <input type="text" name="productName" placeholder="Product Name" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" />
          <input type="text" name="imageURL" placeholder="imageURL" className="input input-bordered input-warning w-full max-w-xs my-3" /><br/>
          <input type="text" name="originalPrice" placeholder="Original price" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" />
          <input type="text" name="resalePrice" placeholder="Resale Price" className="input input-bordered input-warning w-full max-w-xs my-3" /><br/>
          <input type="text" name="location" placeholder="Location" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" />
          <input type="text" name="useYear" placeholder="Years of use" className="input input-bordered input-warning w-full max-w-xs my-3" />
          <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" />
          <select name="categoryId" className="select select-primary w-full max-w-xs">
         {
            categories.map((category,i)=><option key={i} value={category._id}>{category.categoryName}</option>)
         }
        </select>
          <select name="quality" className="select select-primary w-full max-w-xs">
         <option defaultValue>Excellent</option>
         <option>Good</option>
         <option>Fair</option>
        </select>
          <textarea type="text" name="description" placeholder="Description" className="textarea textarea-bordered h-24 w-3/4 my-3" /><br/>
          <input type="submit" className='btn bg-primary' value="ADD" />
          
      </form>
      </div>
    );
};

export default AddProduct;
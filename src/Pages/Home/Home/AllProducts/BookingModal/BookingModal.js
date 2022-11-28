import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../../../Context/AuthProvider';

const BookingModal = ({singleProduct,setSingleProduct, refetch}) => {
    const {user}=useContext(AuthContext);
    const {_id,productName,resalePrice,imageURL}=singleProduct;
    const handleBooking=(e)=>{
        e.preventDefault();
        const form=e.target;
        const phone=form.phone.value;
        const location=form.location.value;
        console.log( phone, location)
      const booking = {
         itemId: _id,
        itemName: productName,
         itemPrice: resalePrice,
        image: imageURL,
        userName: user?.displayName,
        email: user?.email,
        phone,
        location
       }
       console.log(booking)
       fetch('https://goodwill-store-server.vercel.app/bookings',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify(booking)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.acknowledged){
          setSingleProduct(null)
          swal('Booking Confirmed');
          refetch();
        }
        else{
          swal(data.message);
        }
       
      })



    }
    return (
        <>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{productName}</h3>
    <h3 className="text-g font-semibold">Tk {resalePrice}</h3>
    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-6">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input w-full input-bordered"
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="phone number"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="location"
              placeholder="Pickup Point"
              className="input w-full input-bordered"
            />
            <br></br>
            <input
              className="btn w-full btn-primary"
              type="submit"
              value="submit"
            />
          </form>
  </div>
</div>
        </>
    );
};

export default BookingModal;
import React, { useEffect, useState } from 'react';

const Advertise = () => {
    const [advertise, getAdvertise] = useState([]);
    useEffect(() => {
        axios.get
    })
    
    return (
        <div className="card w-96 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Advertise;
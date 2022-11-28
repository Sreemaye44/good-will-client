import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Advertise = () => {
    const [advertise, setAdvertise] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products/advertise',
        {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(data => {
               const advertiseLoaded=data.data;
                setAdvertise(advertiseLoaded);
        });
    })
    
    return (
        <div className='grid lg:grid-cols-3 gap-5 pt-10 '>
            {
                advertise.map(ad =>
                    <div className="card w-96 glass">
  <figure><img src={ad.imageURL} className='h-96' alt="car!"/></figure>
  <div className="card-body">
    <div className="card-actions">
                                <button className="btn btn-primary btn-block">{ad.productName} is only Tk {ad.resalePrice} Now!</button>
    </div>
  </div>
</div>
              )  
            }
        </div>
    );
};

export default Advertise;
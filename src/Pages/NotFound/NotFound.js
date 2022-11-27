import React from 'react';
import photo from '../../../src/assets/error-404-not-found-text-design-vector.webp'

const NotFound = () => {
    return (
        <div>
            <img src={photo} className='w-full h-screen' alt=""  />
        </div>
    );
};

export default NotFound;
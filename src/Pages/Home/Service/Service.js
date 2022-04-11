import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='service'>
            <img className="w-100" src={img} alt="" />
            <div className="service-info p-2">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>{description.length < 50 ? description : description.slice(0, 50) + '...'}</p>
                <button className='bg-primary text-white border-0 rounded p-2'>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;
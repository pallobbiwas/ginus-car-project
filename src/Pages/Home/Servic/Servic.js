import React from 'react';
import './Servic.css';

const Servic = ({service}) => {
    const {name, price, description, img } = service
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>price: {price}</p>
            <p><small>{description}</small></p>
            <button>books this service</button>
        </div>
    );
};

export default Servic;
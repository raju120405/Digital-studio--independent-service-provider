import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,picture,price,description}=service;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='card' style={{width: "18rem"}}>
        <img src={picture} className="card-img-top" alt="..."/>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
         
          <h6>Price:{price}</h6>
          <p className='card-text'>{description}</p>
          <a href="/chackout" className='btn btn-primary'>Book{name}</a>
        </div>
      </div>
        </div>
        
    );
};

export default Service;
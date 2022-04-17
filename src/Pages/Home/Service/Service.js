import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,picture,price,description}=service;
    return (
        <div className='gx-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card " style={{width: "18rem"}}>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p>Price:{price}</p>
          <p class="card-text">{description}</p>
          <a href="#" class="btn btn-primary">Book{name}</a>
        </div>
      </div>
        </div>
        
    );
};

export default Service;
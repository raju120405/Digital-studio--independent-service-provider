import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Servieces.css'
const Services = () => {
    const [ services,setServices]=useState([]);
    useEffect(()=>{
        fetch('Fackdata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='container'> 
            <h1 className='text-primary text-center mt-5'>Our services</h1>
           <div className='row'>
           {
              services.map(service=> <Service
              key={service.id}
              service={service}
              ></Service>)  
            }
           </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
// import images1 from '../../../images/'

// const services = [
//     {id:1, name:'wedding', price:'$250',description:'The fruits of a wedding photographers work probably last the longest of any wedding supplier and theyre something all wedding couples treasure for a lifetime.',img: ''}
// ]


const Services = () => {
    const [ services,setServices]=useState([]);
    useEffect(()=>{
        fetch('Fackdata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2>this is services{services.length}</h2>
        </div>
    );
};

export default Services;
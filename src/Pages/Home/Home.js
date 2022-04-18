import React from 'react';
import Banner from './Banner/Banner';

import Services from './Services/Services';

const Home = () => {
    return (
        <>
        <h2 className='text-center text-primary m-4'>Digital  Photography studio</h2>
            <Banner></Banner>
        <Services></Services> 
        
        </>
    );
};

export default Home;
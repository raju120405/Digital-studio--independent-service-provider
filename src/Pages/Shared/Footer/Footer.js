import React from 'react';

const Footer = () => {
  const today  = new Date();
  const year= today.getFullYear()
    return (
        <footer className='text-center mt-5 bg-dark p-2'>
          <p className='text-white text-center'>copyright © {year}</p>  
        </footer>
    );
};

export default Footer;
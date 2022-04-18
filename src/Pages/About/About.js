import React from 'react';
import myphoto from '../../images/my photo/my photo.jpg'
const About = () => {
    return (
        <div>
            <h3 className='text-center'>About me</h3>
            <div className='d-flex justify-content-around '>
                <div><img src={myphoto} alt="" /></div>
                <div> 
                    <h2>My Name is Md.Raju Ahmed</h2>
                    <h5>my goal as a web developer</h5>
                    <p>I want to be a junior web developer after finishing this corse,<br /> i stricly follow the Programing Hero instraction.I am doing very hard working to acchive a job.</p>
                    

                </div>
            </div>
            
        </div>
    );
};

export default About;
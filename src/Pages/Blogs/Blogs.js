import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center m-4'>This is Blog pages</h2>
            <h4>1.Question = Difference-Between-Authentication-and-Authorization</h4>
            <h6 className='text-center'>Answer No.1</h6>
            <p>Authentication <br /> Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
            <br />
            <p>Authorization</p>
            <p>Authorization works through settings that are implemented and maintained by the organization.</p>

            <h4>2.Question = Why are you using Firebase?</h4>
            <h6 className='text-center'>Answer No.2</h6>
            <p>Simple, easy and quick to learn, explore and develop machine learning features for beginners, intermediate and experts
            </p>
            <h4>3.Question = What other services des firebase provide other then Authentication?</h4>
            <h6 className='text-center'>Answer No.3</h6>
            <p>TeleSign.com...Securely onboard new users and protect account access with two-factor authentication APIs. Helping digital enterprises protect, connect and engage their consumers. Get started today! Reduce Fake accounts. Phone Number Scoring. Talk To An Expert.

            </p>
        </div>
    );
};

export default Blogs;
import React from 'react';
import Footer from '../Components/Footer';
import Image from '../Components/Image';
import Right from '../Components/Right';

const LandingPage = () => {
  return (
    <div>
      <div className='main'>
        <Image />
        <Right />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

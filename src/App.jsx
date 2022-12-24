import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Image from './Components/Image';
import Right from './Components/Right';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { TypeAnimation } from 'react-type-animation';

export default function App() {
  return (
    <div>
      <div className='main'>
        <Image />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Slogan = () => {
  return (
    <TypeAnimation
      sequence={[
        'secret santa',
        400,
        'made',
        400,
        'magical!',
        450,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper='div'
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '6em', color: '#006266', fontFamily: 'Monospace' }}
    />
  );
};

export default Slogan;

import React from 'react';
import Button from '@mui/material/Button';
import { auth, provider } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';

function StartButton() {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('user', user).catch((error) => {
        console.log(error.message);
      });
    });
  };
  return (
    <Button
      variant='outlined'
      size='large'
      color='secondary'
      onClick={handleClick}
    >
      Get Started!
    </Button>
  );
}

export default StartButton;

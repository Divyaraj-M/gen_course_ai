import { Button } from '../../components/ui/button'; // Adjusted import path
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md'>
      <Image src="/logo.png" width={130} height={130} alt="Logo" />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;

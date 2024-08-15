
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png'
const Spinner = () => {
  return (
    <div className="fixed h-[100vh] w-[100vw] flex justify-center items-center backdrop-blur-md bg-white/30">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <div className="absolute w-10 h-10">
        <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Spinner;

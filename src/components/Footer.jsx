import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='h-fit w-screen px-[10%] text-center mt-3 pb-10'>
        {/* <p className='bg-red flex items-center justify-center gap-2'>Made in India with <FaHeart className='text-xs'/> </p> */}
        <p> &copy; 2024 ShoppingBlues. Built by <a className='text-orange font-semibold' href='https://suman-roy.vercel.app' target='_blank'>Suman Roy</a> </p>
    </footer>
  )
}

export default Footer
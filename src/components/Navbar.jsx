import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();
  const [cartLen, setCartLen] = useState(0);
  useEffect(() => {
    setCartLen(state.products.length);
  }, [state]);

  return (
    <nav className='w-screen px-5 md:px-8 lg:px-10 py-6 flex items-center justify-between'>
      <Link to="/"><h1 className='text-md font-bold text-black font-serif'>style.up</h1></Link>
      <ul className='w-fit flex items-center justify-start gap-2 text-md'>
        <Link to="/cart" className='text-lg relative' ><FaShoppingCart /> <span className='absolute bg-red h-5 w-5 rounded-full text-sm flex flex-1 items-center justify-center text-white -top-2 -right-3'>{cartLen}</span></Link>
      </ul>
    </nav>
  )
}

export default Navbar;
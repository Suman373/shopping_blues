import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='w-screen px-10 py-6 flex items-center justify-between'>
        <Link to="/"><img src={Logo} className='h-16' alt="logo" /></Link>
        <ul className='w-fit flex items-center justify-start gap-2 text-md'>
           <Link to="/cart" className='text-lg relative' ><FaShoppingCart/> <span className='absolute bg-red h-5 w-5 rounded-full text-sm flex flex-1 items-center justify-center text-white -top-2 -right-3'>0</span></Link> 
        </ul>
    </nav>
  )
}

export default Navbar;
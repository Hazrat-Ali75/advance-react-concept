import { LogIn, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
     
    const [open, setOpen] = useState(false);

    return (
       <nav className='flex justify-between px-[32px] h-[51px] items-center bg-amber-300'>
        <button onClick={()=> setOpen(!open)} className='sm:hidden'>
            {
                open? <X size={18} className='sm:hidden '></X> : <Menu size={18} className='sm:hidden'></Menu>
            }
            
            </button>
        <ul className={`sm:hidden absolute left-0 
           ${open ? 'top-[51px] duration-800':'-top-[200px]'}
         bg-gray-600 text-white  `}>
            <li className='px-2 py-1 hover:bg-amber-500 cursor-pointer'>Home</li>
            <li className='px-2 py-1 hover:bg-amber-500 cursor-pointer'>Product</li>
            <li className='px-2 py-1 hover:bg-amber-500 cursor-pointer '>Services</li>
            <li className='px-2 py-1 hover:bg-amber-500 cursor-pointer'>Blogs</li>
            <li className='px-2 py-1 hover:bg-amber-500 cursor-pointer'>Blogs</li>
            <li className='px-2 py-1 hover:bg-amber-500 cursor-pointer'>About</li>
        </ul>
          <div className='hidden sm:block'>
            <h1 className=' text-[18px] md:text-[22px]'>MyWeb</h1>
          </div>
          <ul className='hidden  sm:flex gap-[12px] md:gap-[20px]'>
            <li className='hover:bg-amber-500 md:text-[17px] hover:text-white py-[13px] px-[6px]'>Home</li>
            <li className='hover:bg-amber-500 md:text-[17px] hover:text-white py-[13px] px-[6px]'>Product</li>
            <li className='hover:bg-amber-500 md:text-[17px] hover:text-white py-[13px] px-[6px]'>Services</li>
            <li className='hover:bg-amber-500 md:text-[17px] hover:text-white py-[13px] px-[6px]'>Blogs</li>
            <li className='hover:bg-amber-500 md:text-[17px] hover:text-white py-[13px] px-[6px]'>About</li>
          </ul>
          <div className='flex gap-1 items-center'>
            <span className='md:text-[15px]'><LogIn size={17}></LogIn></span>
            <a className='text-[12px] sm:text-[17px]' href="">Sign in</a>
          </div>
       </nav>
    );
};

export default Navbar;
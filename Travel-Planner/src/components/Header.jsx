import React, { useState } from 'react';
import { FaBars, FaEllipsisV } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='p-2 h-[60px] w-[auto] text-black z-10 absolute left-[4%] right-[4%] top-10 flex justify-between items-center'>
      <div>
        <div className='font-bold text-3xl'>Hola Trip</div>
      </div>
      <ul className='hidden sm:flex p-2 justify-between'>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Home</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Destinations</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Budget Planner</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Blog</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>About</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Contact Us</li>
      </ul>
      <div className='hidden sm:flex items-center px-2'>
        <select className='mx-[2px] font-semibold bg-transparent border-none'>
          <option value="">option1</option>  
          <option value="">option2</option>  
          <option value="">option3</option>  
        </select>
        <button className='bg-black text-white mx-[2px] w-[120px] text-center cursor-pointer'>Log In</button>
      </div>
      <div className='flex sm:hidden'>
        <FaBars className='text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      <div className='flex sm:hidden'>
        <FaEllipsisV className='text-2xl cursor-pointer' />
      </div>
      {menuOpen && (
        <div className='absolute top-[60px] left-0 right-0 bg-white p-4 shadow-md'>
          <ul className='flex flex-col items-start'>
            <li className='py-2 font-semibold cursor-pointer hover:scale-[1.2]'>Home</li>
            <li className='py-2 font-semibold cursor-pointer hover:scale-[1.2]'>Destinations</li>
            <li className='py-2 font-semibold cursor-pointer hover:scale-[1.2]'>Budget Planner</li>
            <li className='py-2 font-semibold cursor-pointer hover:scale-[1.2]'>Blog</li>
            <li className='py-2 font-semibold cursor-pointer hover:scale-[1.2]'>About</li>
            <li className='py-2 font-semibold cursor-pointer hover:scale-[1.2]'>Contact Us</li>
            <div className='flex flex-col mt-4'>
              <select className='my-[2px] font-semibold bg-transparent border-none'>
                <option value="">option1</option>  
                <option value="">option2</option>  
                <option value="">option3</option>  
              </select>
              <button className='bg-black text-white my-[2px] w-full text-center cursor-pointer'>Log In</button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

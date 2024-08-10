import React, { useState } from 'react';
import { FaBars, FaEllipsisV } from 'react-icons/fa';

const countries = [
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'United Kingdom', code: 'UK', flag: '🇬🇧' },
  // Add more countries as needed
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  // Function to toggle dropdown open/close
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to select a country and close dropdown
  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div className='p-2 h-[60px] w-[auto] text-black z-10 absolute left-[4%] right-[4%] top-10 flex justify-between items-center'>
      {/* Brand Name */}
      <div>
        <div className='font-bold text-3xl'>Hola Trip</div>
      </div>

      {/* Navigation Menu for larger screens */}
      <ul className='hidden sm:flex p-2 justify-between'>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Home</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Destinations</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Budget Planner</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Blog</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>About</li>
        <li className='mx-3 font-semibold cursor-pointer hover:scale-[1.2]'>Contact Us</li>
      </ul>

      {/* Country Selector and Login Button for larger screens */}
      <div className='hidden sm:flex items-center px-2'>
        <div className='relative'>
          <button className='flex items-center font-semibold bg-transparent border-none' onClick={toggleDropdown}>
            <span className='mr-2'>{selectedCountry.flag}</span>
            <span>{selectedCountry.name}</span>
          </button>
          {dropdownOpen && (
            <ul className='absolute bg-white shadow-md mt-2 rounded-lg'>
              {countries.map((country) => (
                <li
                  key={country.code}
                  onClick={() => selectCountry(country)}
                  className='cursor-pointer px-4 py-2 hover:bg-gray-200 flex items-center'
                >
                  <span className='mr-2'>{country.flag}</span>
                  <span>{country.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className='bg-black text-white mx-[2px] w-[120px] text-center cursor-pointer'>Log In</button>
      </div>

      {/* Mobile Menu Icons */}
      <div className='flex sm:hidden'>
        <FaBars className='text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      <div className='flex sm:hidden'>
        <FaEllipsisV className='text-2xl cursor-pointer' />
      </div>

      {/* Mobile Menu */}
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
              <div className='relative'>
                <button className='flex items-center font-semibold bg-transparent border-none' onClick={toggleDropdown}>
                  <span className='mr-2'>{selectedCountry.flag}</span>
                  <span>{selectedCountry.name}</span>
                </button>
                {dropdownOpen && (
                  <ul className='absolute bg-white shadow-md mt-2 rounded-lg'>
                    {countries.map((country) => (
                      <li
                        key={country.code}
                        onClick={() => selectCountry(country)}
                        className='cursor-pointer px-4 py-2 hover:bg-gray-200 flex items-center'
                      >
                        <span className='mr-2'>{country.flag}</span>
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button className='bg-black text-white my-[2px] w-full text-center cursor-pointer'>Log In</button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

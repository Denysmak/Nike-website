import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container border relative'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 ${isMenuVisible ? 'block' : 'hidden'} lg:flex max-lg:absolute max-lg:left-[80%] max-lg:top-[70px] max-lg:flex-col max-lg:bg-slate-50 max-lg:border max-lg:border-gray-400 max-lg:w-[160px] rounded-2xl p-5 max-md:w-[140px] max-md:left-[70%] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-[80%]`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-monsterrat leading-normal text-lg text-slate-gray' onClick={toggleMenu} >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='lg:hidden'>
          <img
            src={hamburger}
            alt="Hamburguer"
            width={24}
            height={25}
            onClick={toggleMenu}
            className='cursor-pointer'
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

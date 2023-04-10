import React, { useState, useEffect } from 'react';
import LogoWhite from '../assets/img/logo-white.svg';
import LogoDark from '../assets/img/logo-dark.svg';



const Header = () => {

  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })
  })

  const navLinks = ['Home', 'Rooms', 'Restaurant', 'Spa', 'Contact'];


  return (
    <header  className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >
      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>
        
        {/* logo */}
        <a href="/">
          { header ? (
            <img src={LogoDark} alt="" className='w-[160px]'/>
          ) : ( 
            <img src={LogoWhite} alt="" className='w-[160px]'/>
          )}
        </a>

        {/* nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
        flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
          {
            navLinks.map(link =>
              <a href="" className='transition hover:text-accent' key={link}>
                {link}
              </a>
            )
          }
        </nav>

      </div>

    </header>  
  )
};

export default Header;

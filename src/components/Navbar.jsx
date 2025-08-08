import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=''>
      <nav className='px-4 md:px-10 w-full h-16 gap-3 flex justify-between items-center bg-[#f7f5ff] fixed top-0 z-50'>
        {/* Left Section */}
        <div className='flex items-center gap-2'>
          <span>
            <img width={25} height={25} src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fmail_xxy4bg.svg" alt="proton-logo" />
          </span>
          <span className='flex items-center gap-2'>
            <a href="/"><img width={50} height={50} src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg" alt="proton-logo" /></a>
            <a href="/"><img width={35} height={35} src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fmail-purple_resbmb.svg" alt="proton-logo" /></a>
          </span>
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
            <svg className='w-6 h-6 text-[#372580]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center justify-between w-full'>
          <ul className='flex items-center space-x-4 font-serif text-[#372580]'>
            <li><a className='hover:text-blue-600 font-semibold font-sans' href="/">Features</a></li>
            <li><a className='hover:text-blue-600 font-semibold font-sans' href="/">Pricing</a></li>
            <li><a className='hover:text-blue-600 font-semibold font-sans' href="/">Mail for Business</a></li>
            <li><a className='hover:text-blue-600 font-semibold font-sans' href="/">Download</a></li>
            <li><a className='hover:text-blue-600 font-semibold font-sans' href="/">Support</a></li>
          </ul>
          <div className='flex items-center font-serif space-x-3 text-[#372580]'>
            <span className='hover:text-blue-600 font-sans font-semibold'><a href="/">Discover Proton</a></span>
            <button className='hover:bg-blue-800 font-serif p-1 px-2 rounded-2xl bg-[#6d4aff] text-white'>Get Proton Mail</button>
            <span className='hover:text-blue-600 font-sans font-semibold'><a href="/">Sign in</a></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-[#f7f5ff] px-4 pt-2 pb-4 space-y-2 font-serif text-[#372580]'>
          <a className='block hover:text-blue-600 font-semibold font-sans' href="/">Features</a>
          <a className='block hover:text-blue-600 font-semibold font-sans' href="/">Pricing</a>
          <a className='block hover:text-blue-600 font-semibold font-sans' href="/">Mail for Business</a>
          <a className='block hover:text-blue-600 font-semibold font-sans' href="/">Download</a>
          <a className='block hover:text-blue-600 font-semibold font-sans' href="/">Support</a>
          <hr />
          <a className='block hover:text-blue-600 font-semibold font-sans' href="/">Discover Proton</a>
          <button className='w-full hover:bg-blue-800 font-serif p-2 rounded-2xl bg-[#6d4aff] text-white'>Get Proton Mail</button>
          <a className='block hover:text-blue-600 font-semibold font-sans' href="/">Sign in</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
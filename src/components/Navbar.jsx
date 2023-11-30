import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
  
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <>
    <nav className='md:sticky md:top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-5'>
    <div className="max-w-5xl mx-auto px-4 font-mono">
      <div className="flex items-center justify-between h-16">
        <span className="text-2xl text-amber-500 font-semibold">Deepak.dev</span>
        <div className="hidden md:flex gap-10 text-lg text-amber-600 ">
            <Link to="home" smooth={true} duration={500} className='hover:text-amber-900'>Home</Link>
            <Link to="about" smooth={true} duration={500} className='hover:text-amber-900'>About</Link>
            <Link to="projects" smooth={true} duration={500} className='hover:text-amber-900'>Projects</Link>
            <Link to="blog" smooth={true} duration={500} className='hover:text-amber-900'>Blog</Link>
        </div>
      </div>
    </div>
  </nav>
  <div className='md:hidden fixed bottom-0 left-0 right-0  p-4 bg-black backdrop-filter backdrop-blur-lg bg-opacity-5'>
  <div className="flex gap-8 flex-row text-lg text-amber-600 ">
            <Link to="home" smooth={true} duration={500} className='hover:text-amber-900'>Home</Link>
            <Link to="about" smooth={true} duration={500} className='hover:text-amber-900'>About</Link>
            <Link to="projects" smooth={true} duration={500} className='hover:text-amber-900'>Projects</Link>
            <Link to="blog" smooth={true} duration={500} className='hover:text-amber-900'>Blog</Link>
        </div>
</div>
    </>
  )
}

export default Navbar
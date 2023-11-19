import React from 'react'

const Navbar = () => {
  return (
    <div className='px-2 py-4'>
      <header className='flex flex-row justify-between'>
          <div  className='ml-4' >
          <span className='font-2xl '>Deepak G.</span>
          </div>
          <nav >
            <ul className='flex flex-row '>
              <li className='mr-4'>Home</li>
              <li className='mr-4'>About</li>
              <li className='mr-4'>Project</li>
              <li className='mr-4'>Contact me</li>
            </ul>
          </nav>
        
      </header>
    </div>
  )
}

export default Navbar
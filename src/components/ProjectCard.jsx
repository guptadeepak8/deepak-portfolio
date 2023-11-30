import React from 'react'

const Project = ({name,desc,link,code}) => {
  return (
    <div className='text-amber-300 border-2 h-96 md:w-72 w-72 rounded-xl '>
      <div className='md:h-8 h-6 border-b-2 flex items-center '>
        <div className='bg-red-500 rounded-full h-2 w-2 ml-3'></div>
        <div className='bg-amber-400 rounded-full h-2 w-2 ml-3'></div>
        <div className='bg-green-500 rounded-full h-2 w-2 ml-3'></div>
      </div>

      <div className='flex flex-col  '> 
      <div className='text-center px-5 py-2'>
        <span className='md:text-2xl text-xl font-extrabold'>{name}</span>
        <p className='text-sm md:text-md mt-5'>{desc}</p>
      </div>
        <div className=' mt-5 mt-2 text-center '>
        <a  href={link}><span className="transition-all duration-300 hover:bg-green-500 font-extrabold hover:text-black border-r-4 border-b-4 border px-5 py-2 rounded-lg text-green-500" >Live</span></a>
        <a href={code}><span className="transition-all duration-300 hover:bg-blue-500 font-extrabold hover:text-black border-r-4 border-b-4 border px-5 py-2 rounded-lg ml-3 text-blue-500" >Code</span></a>
        </div>
      </div>
    </div>
  )
}

export default Project
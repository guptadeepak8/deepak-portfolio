import React from 'react'

const Project = ({name,desc,link,code,img,tech,id}) => {
  return (
    <div className='text-amber-300 border-2 md:h-[580px]  md:w-[350px] flex-none rounded-xl flex flex-col justify-between' key={id}>
      
      <div className='md:h-8 h-6 border-b-2 flex items-center '>
        <div className='bg-red-500 rounded-full h-2 w-2 ml-3'></div>
        <div className='bg-amber-400 rounded-full h-2 w-2 ml-3'></div>
        <div className='bg-green-500 rounded-full h-2 w-2 ml-3'></div>
      </div>

      <div className='flex flex-col '> 
      <div className='border-b-2 mb-2 md:h-36'>
        <img src={img} alt="Image" className=' w-84 '/>
      </div>
      <div className='text-center px-5 py-2 '>
        <span className='md:text-3xl text-xl font-extrabold text-white '>{name}</span>
        <p className='text-sm md:text-md mt-5 '>{desc}</p>
      </div>
      </div>
      <div className='flex gap-2 flex-wrap px-5 text-center mb-10'>

        {tech?.map((text,id)=>{
          return  <span className="px-2 py-1 border-white border-2 rounded-2xl" key={id}>{text}</span>
        })}
        
      </div>
      <div className='mt-auto text-center mb-5 '>
          <a href={link}target='_blank'>
            <span className="transition-all duration-300 hover:bg-green-500 font-extrabold hover:text-black border-r-4 border-b-4 border px-5 py-2 rounded-lg text-green-500">Live</span>
          </a>
          <a href={code}>
            <span className="transition-all duration-300 hover:bg-blue-500 font-extrabold hover:text-black border-r-4 border-b-4 border px-5 py-2 rounded-lg ml-3 text-blue-500">Code</span>
          </a>
        </div>
    </div>
  )
}

export default Project
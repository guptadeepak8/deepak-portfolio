import React, { useEffect, useState } from "react";


const Home = () => {
  return (
    <div className="flex  flex-col  items-center bg-black text-green-400 font-mono mb-20" id='home'>
      <div className="my-3 md:my-6">
        <div className="text-center">

        <p className="text-3xl md:text-6xl text-blue-500 mb-5 font-serif" >🙋‍♂️ Hello world!</p>
        <span className="text-xl md:text-3xl font-bold text-white">I'm Deepak gupta, a software engineer from India.</span>
        </div>
      </div>
      <div className="flex flex-row mx-4 md:mx-32  gap-2 md:gap-12 ">
        <div >
        <p className="text-md md:text-2xl mb-5"> A self-taught FrontEnd developer, deeply passionate about coding and creating cool projects.</p>
        <p className="text-md md:text-2xl"> I am enthusiastic about learning new things.Like to deepdive into the world of open source and doing contribution. I'll be sharing some of my projects here.Feel free to explore,and don't hesitate to connect! 🚀✨</p>
        <div className="text-md md:text-2xl mt-8 flex gap-5 ">
          <a href="https://github.com/guptadeepak8" target="_blank"><span className="transition-all duration-300 hover:bg-amber-500 font-extrabold hover:text-black border-r-4 border-b-4 border p-2 rounded-lg text-amber-500">Github</span></a>
          <a href="https://twitter.com/Deepakg0808"><span className="transition-all duration-300 hover:bg-amber-500 font-extrabold hover:text-black border-r-4 border-b-4 border p-2 rounded-lg text-amber-500" >Twitter</span></a>
          <a href="https://www.linkedin.com/in/guptadeepakk8/"><span className="transition-all duration-300 hover:bg-amber-500 font-extrabold hover:text-black border-r-4 border-b-4 border p-2 rounded-lg text-amber-500">Linkdin</span></a>
        </div>
        
        </div>
        {/* <div className="bg-red-300 w-48 h-48 rounded-full flex-shrink-0 sm:hidden"></div>  */}
      </div>
    </div>
  );
};

export default Home;

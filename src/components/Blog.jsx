import React from "react";

const Blog = () => {
  return (
    <div className="h-screen md:h-screen mt-20 " id='blog'>
      <div className="text-center md:mb-20 mb-10">
        <span className="text-2xl md:text-5xl text-amber-500 font-extrabold ">
          Blog
        </span>
      </div>
      <div className="flex flex-col gap-5 md:gap-8 items-center  md:flex-row md:justify-center">
        <div className="relative">
          <div className="bg-gray-400 shadow-md p-4 absolute top-4 left-4 z-0 w-full md:h-72 h-60 rounded-xl"></div>
          <a href="https://dgsoftwaredev.hashnode.dev/optimizing-frontend-performance-techniques-for-faster-websites" className="text cursor-pointer">
            <div className="text-black border-2 h-60 md:h-72 relative z-10 bg-blue-500 p-4 rounded-xl w-72">
              <p className="text-2xl md:text-4xl font-bold">
              Optimizing Frontend Performance Techniques for faster websites
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;

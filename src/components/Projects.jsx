import React from 'react'
import Project from './ProjectCard'
import careerimg from '/career.png'
import chatimg from '/chat.png'
import expenseimg from '/expense.png'
import jotionimg from '/jotion.png'
const Projects = () => {

  const projectData=[
    {
      name:'CareerLink',
      desc:'Developed a job portal with React, Redux for state management, and Tailwind CSS for styling the frontend. Built the backend using Node.js and Express to handle data management and application logic Implemented JWT for secure authentication and Passport for password management.',
      img:careerimg,
      link:'https://noter-app-delta.vercel.app',
      code:'https://github.com/guptadeepak8/notion-clone',
      tech:['React','Redux','Tailwind','Node.js','Express','JWT'],
   },
    {
      name:'Jotion',
      desc:'Created a tool to help users organize and manage their ideas easily with a user-friendly design. Built using modern frameworks Next.js, ShadcnUI, and Tailwind CSS for the frontend Additionally, it utilizes Convex for the backend and Clerk for secure authentication',
      img:jotionimg,
      link:'https://noter-app-delta.vercel.app',
      code:'https://github.com/guptadeepak8/notion-clone',
      tech:['Next.js','ShadcnUI','Tailwind','Convex','Clerk'],
   },
    {
      name:'E-kart',
      desc:'Build a e-commerce platform using React for the frontend, Redux for state management, and Tailwind CSS for styling. The backend is powered by Node.js and Express, connected to a MongoDB database. This project includes features such as product listing, shopping cart and a checkout process.',
      img:'',
      link:'https://ecommerce-web-mern.onrender.com/',
      code:'https://github.com/guptadeepak8/ecommerce',
      tech:['React','Redux','Tailwind CSS','Node.js','Express','MongoDB'],
   },
   {
    name:'Chatter',
    desc:'Chatter is a real-time chatting application that enables users to communicate seamlessly. Built using React and Firebase, this app offers a dynamic and responsive chat interface. Stay connected with friends and colleagues through this intuitive and efficient chatting platform.',
    img:chatimg,
    link:'https://what-the-chat.netlify.app/',
    code:'https://github.com/guptadeepak8/chatter',
    tech:['React','Firebase',],
 },
    {
      name:'Expense-mern',
      desc:'Expense Tracker is a MERN stack application designed to help users manage their finances effectively. Record all your expenses, track your monthly expenditures, and features such as transaction editing and deletion. This app provides a user-friendly interface for financial tracking.',
      img:expenseimg,
      link:'https://expanzer-mern.netlify.app/',
      code:'https://github.com/guptadeepak8/expense-mern',
      tech:['React','Redux','Tailwind CSS','Node.js','Express','MongoDB'],
   },
    
]
  return (
   <>

      <div className='text-center md:mb-20 mb-10 '>
      <span className='text-3xl md:text-5xl text-amber-500 font-extrabold '>Projects</span>
      </div>
      <div className='md:overflow-x-auto w-full  no-scrollbar px-10'>

      <div className='flex flex-col gap-5 md:gap-8 items-center  md:flex-row  '>
        {
          projectData.map((props,id)=>{
            return(
              <>
                <Project id={id} name={props.name} desc={props.desc} link={props.link} code={props.code} img={props.img} tech={props.tech}/>
              </>
            )
          }) 
        }
      </div>
      </div>
   </>
     
   
  )
}

export default Projects
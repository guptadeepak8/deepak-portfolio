import React from 'react'
import Project from './ProjectCard'

const Projects = () => {

  const projectData=[
    {
      name:'Ecommerce',
      desc:'Build a e-commerce platform using React for the frontend, Redux for state management, and Tailwind CSS for styling. The backend is powered by Node.js and Express, connected to a MongoDB database. This project includes features such as product listing, shopping cart and a checkout process.',
      link:'https://ecommerce-web-mern.onrender.com/',
      code:'https://github.com/guptadeepak8/ecommerce',
   },
    {
      name:'Expense-mern',
      desc:'Expense Tracker is a MERN stack application designed to help users manage their finances effectively. Record all your expenses, track your monthly expenditures, and features such as transaction editing and deletion. This app provides a user-friendly interface for financial tracking.',
      link:'https://expanzer-mern.netlify.app/',
      code:'https://github.com/guptadeepak8/expense-mern',
   },
    {
      name:'Chatter',
      desc:'Chatter is a real-time chatting application that enables users to communicate seamlessly. Built using React and Firebase, this app offers a dynamic and responsive chat interface. Stay connected with friends and colleagues through this intuitive and efficient chatting platform.',
      link:'https://what-the-chat.netlify.app/',
      code:'https://github.com/guptadeepak8/chatter',
   },
    {
      name:'To-do app',
      desc:'Take control of your daily tasks with this task manager application. Built using React and Typescript, the To-do app allows users to organize and manage their daily tasks efficiently. Enhance your productivity with features like task addition and completion tracking.',
      link:'https://tasker-todo.netlify.app',
      code:'https://github.com/guptadeepak8/todoApp',
   },
]
  return (
    <div className="max-h-max md:h-screen" id='projects'>
      <div className='text-center md:mb-20 mb-10'>
      <span className='text-2xl md:text-5xl text-amber-500 font-extrabold '>Side-Projects</span>
      </div>
      <div className='flex flex-col gap-5 md:gap-8 items-center  md:flex-row md:justify-center'>
        {
          projectData.map((props,id)=>{
            return(
              <>
                <Project key={id} name={props.name} desc={props.desc} link={props.link} code={props.code}/>
              </>
            )
          }) 
        }
      </div>
     
    </div>
  )
}

export default Projects
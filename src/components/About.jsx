import React from "react";

const About = () => {
  return (
    <div className="mb-20 md:mx-12" id='about'>
      <div className="text-center mb-10">
        <span className="text-3xl md:text-5xl text-amber-500 font-extrabold">
          My Skillsets
        </span>
      </div>
      <div className="mx-8 md:mx-20">
        <div className="text-md md:text-2xl text-green-500 mb-4">
          {" "}
          I am a Frontend Engineer skilled in React.js, Next.js, and Tailwind CSS. I build robust backend solutions with Node.js, Express.js, and Prisma. Proficient in TypeScript and Redux, I create scalable and secure web applications, ensuring modern and responsive designs.
        </div>
        <div className="text-md md:text-2xl text-green-500 mb-2">
        Technoloies I know
        </div>
        <div className="flex flex-row md:gap-8 gap-1">
          <a href="http://www.w3.org/html/logo/">
            <img
              src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
              width="63"
              height="64"
              alt="HTML5 Powered"
              title="HTML5 Powered"
            />
          </a>

          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="63"
              height="64"
            />{" "}
          </a>{" "}
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="figma"
              width="63"
              height="64"
            />{" "}
          </a>{" "}
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="63"
              height="64"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="63"
              height="64"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="63"
              height="64"
            />{" "}
          </a>
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
              alt="react"
              width="63"
              height="64"
            />{" "}
          </a>
          <a href="https://typescriptlang.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
              alt="react"
              width="63"
              height="64"
            />{" "}
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"  
              alt="react"
              width="63"
              height="64"
            />{" "}
          </a>
          <a href="https://mongodb.com.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"   
              alt="react"
              width="63"
              height="64"
            />{" "}
          </a>
          <a href="https://mui.com/material-ui/" target="_blank" rel="noreferrer">
            {" "}
            <img
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"   
              alt="react"
              width="63"
              height="64"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

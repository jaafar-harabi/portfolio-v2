import React from 'react'
import { Typography } from "@material-tailwind/react";
import {Link} from 'react-scroll'
function Foot({theme}) {
  
  return (
    <>

  
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between  " id="theme">
      <Typography  className=" pl-10 font-bold">
        &copy; {new Date().getFullYear()} Jaafar Harabi
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            
            className="p-1 font-medium nav-item"
          >
            <Link to="home"   spy={true} smooth={true}   duration={600} delay={50} className="flex items-center font-bold  transition-colors text-xl hover:text-2xl head-font hover:-rotate-3 text-res active:nav-item" >
          Home
        </Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#about"
            
            className="p-1 font-medium nav-item"
          >
          <Link to="about"    spy={true}  smooth={true}   duration={600} delay={50}   className="flex items-center font-bold transition-colors text-xl hover:text-2xl head-font hover:-rotate-3 text-res active:nav-item " >
          About
        </Link>
            
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#projects"
            
            className="p-1 font-medium nav-item"
          >
            <Link to="projects"    spy={true} smooth={true}    duration={600} delay={50}  className="flex items-center font-bold  transition-colors text-xl hover:text-2xl head-font hover:-rotate-3  text-res active:nav-item">
          Projects
        </Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#contact"
            
            className="p-1 font-medium nav-item"
          >
           <Link to="contact"   spy={true} smooth={true}    duration={600} delay={50}   className="flex items-center font-bold  transition-colors text-xl hover:text-2xl head-font hover:-rotate-3 text-res mr-5 active:nav-item">
          Contact
        </Link>
          </Typography>
        </li>
      </ul>
    </footer>
    </>
  )
}

export default Foot
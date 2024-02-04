import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {NavLink} from 'react-router-dom'
import ReactSwitch from "react-switch";
import {Link} from 'react-scroll'
 
function NavList() {
  
  return (
    <>

    
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 " >
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium nav-item"
      >
        <Link to="home"   spy={true} smooth={true}  duration={600} delay={50}   className="flex items-center font-bold  transition-colors text-xl hover:text-2xl head-font hover:-rotate-3 text-res active:nav-item " >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
       
        className="p-1 font-medium nav-item"
      >
        <Link to="about"   spy={true} smooth={true}  duration={600} delay={50}    className="flex items-center font-bold  transition-colors text-xl hover:text-2xl head-font hover:-rotate-3 text-res active:nav-item" >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
       
        className="p-1 font-medium nav-item"
      >
        <Link to="projects"   spy={true} smooth={true}  duration={600}  delay={50}   className="flex items-center font-bold  transition-colors text-xl hover:text-2xl head-font hover:-rotate-3 text-res active:nav-item">
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
       
        className="p-1 font-medium nav-item"
      >
        <Link to="contact"   spy={true} smooth={true}  duration={600}  delay={50}  className="flex items-center font-bold  transition-colors text-xl hover:text-2xl head-font hover:-rotate-3 text-res active:nav-item">
          Contact
        </Link>
      </Typography>
      
    </ul>
    </>
  );
}
 
export default function Example( {theme,toggleTheme}) {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <>

    
        <Navbar className=" max-w-screen-xl  mx-auto fixed py-3 x responsive  navbar-responsive left-1/2 -translate-x-1/2 " id={theme}>
          
        
          <div className="flex items-center justify-between ">
            <Typography
              
              
              variant="h6"
              className="mr-4 cursor-pointer py-1.5"
            >
            <NavLink to='https://www.linkedin.com/in/jaafar-harabi/' target="_blank" ><i className="fa-brands fa-linkedin text-3xl mr-5" style={{color:"#1e96f3"}}></i> </NavLink>
            <NavLink to='https://www.github.com/jaafar-harabi' target="_blank" > <i className="fa-brands fa-github text-3xl" style={{color:"#1e96f3"}}></i> </NavLink>
            
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} onColor='#000' className="ml-5"  />
            <label id={theme} className="ml-5" > {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            
              
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6 bg-blue-400" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6 bg-blue-400" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
          
        </Navbar>
    
    </>
  );
}
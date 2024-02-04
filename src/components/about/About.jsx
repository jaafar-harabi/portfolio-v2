import { motion } from "framer-motion";
import { Avatar,Button } from "@material-tailwind/react";
import {Card,CardHeader,CardBody,CardFooter,Typography,Tooltip,} from "@material-tailwind/react";
import {css,html,js,react,python,mysql,wordpress,mongo,img2,resume,aws,azure,docker,odoo} from '../../assets'
import './module.style.css'
  
function About({theme}) {
  
   
    
  return (
    <>

   
    <div   id="about" >
    <div className='pt-44 about-res'>
        <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}   className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1   '  id={theme} >
            <div  className='text-center mt-16 ' >
                <div className="flex gap-4 justify-center" >
                    
                    <Avatar src={html} alt="avatar" size='xl' className='hover:h-16' />
                    <Avatar src={css} alt="avatar" size='xl' className='hover:h-16' />
                    <Avatar src={js} alt="avatar" size='xl' className='hover:h-16'/>
                    <Avatar src={react} alt="avatar" size='xl' className='hover:h-16'/>
                    
                    
                    
                </div>
                <div className='flex gap-4 justify-center pt-5'>
                    <Avatar src={mongo} alt="avatar" size='xl' className='hover:h-16'/>
                    <Avatar src={odoo} alt="avatar" size='xl' className='hover:h-16'/>
                    <Avatar src={mysql} alt="avatar" size='xl' className='hover:h-16'/>
                    <Avatar src={python} alt="avatar" size='xl' className='hover:h-16'/>

                </div>
                
                <div className='flex gap-4 justify-center pt-5'>
                    <Avatar src={docker} alt="avatar" size='xl' className='hover:h-16'/> 
                    <Avatar src={azure} alt="avatar" size='xl' className='hover:h-16'/> 
                    <Avatar src={aws} alt="avatar" size='xl' className='hover:h-16'/> 
                    <Avatar src={wordpress} alt="avatar" size='xl' className='hover:h-16'/> 


                </div>
                
                <a href={resume} download='resume' target='_blank' rel='noreferrer'> <Button type='button'  className='mt-10  ' >  Download my resume </Button></a>  
                    

            
            </div>
                <div    >
                    
                        <Card  className=" w-96 ml-auto mr-auto  border-solid border-white border-2  card-responsive mt-10" id={theme} >
                            <CardHeader floated={false} className="h-56" id={theme}>
                                <motion.img src={img2} alt="img"  />
                            </CardHeader>
                            <CardBody className="text-center" id={theme}>
                                <Typography variant="h4"  className="mb-2">
                                Jaafar Harabi
                                </Typography>
                                <Typography  className="font-medium" >
                                Full Stack Developer
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex justify-center gap-7 pt-2 " id={theme}>
                                <Tooltip content="Facebook">
                                <Typography
                                    as="a"
                                    href="https://www.facebook.com/jaafar.harabi.351/"
                                    target="_blank"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <i className="fab fa-facebook" />
                                </Typography>
                                </Tooltip>
                                <Tooltip content="Github">
                                <Typography
                                    as="a"
                                    href="https://github.com/jaafar-harabi"
                                    target="_blank"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <i className="fa-brands fa-github" />
                                </Typography>
                                </Tooltip>
                                <Tooltip content="Linkedin">
                                <Typography
                                    as="a"
                                    href="https://www.linkedin.com/in/jaafar-harabi/"
                                    target="_blank"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </Typography>
                                </Tooltip>
                                
                                
                            </CardFooter>
                    
                    </Card>


                    
                
                </div>
  
        </motion.div>

    </div>
    
     

    
   
    
    </div>

    
    
    </>
   
   
)}

export default About
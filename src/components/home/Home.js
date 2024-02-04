import React from 'react'
import img from '../../assets/img.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './module.style.css'
import {motion} from 'framer-motion'



function Home({theme} ) {
 
 
  const [text]=useTypewriter({
    words: [`HELLO ! I'M A FULL STACK DEVELOPER JAVASCRIPT `],
    loop: {},
    typeSpeed:120,
    deleteSpeed:80
  });
  
  return (
    <>

    
    <div   id='home' className='pt-10 '>
      <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center  pb-52' id={theme} > 
          <div >
              <h1 className='mt-80 text-responsive'>
                <span className='text-2xl font-extrabold '>
                  {text}
                </span>
                <span  style={{color:'blue'}} className='text-2xl font-extrabold'>
                  <Cursor cursorStyle='<'/>
                </span>
                
              </h1>
          </div>
          <div className='text-center'> 
              <img src={img} alt='img' className='pt-28 hover:-rotate-3 photo-responsive'  />
          </div>
      </motion.div>
      

    </div>
    </>
   
  )
}

export default Home
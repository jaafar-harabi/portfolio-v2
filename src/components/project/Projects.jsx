import React, { useState } from 'react'
import {Button} from "@material-tailwind/react";
import { Tab } from '@headlessui/react'
import 'react-multi-carousel/lib/styles.css'
import {landing,store,quote,app} from '../../assets'
import {motion} from 'framer-motion'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
  

function Projects({theme}) {

  let [categories] = useState({
    "Landing Page": [
      {
        id: 1,
        image: landing,
        technologie: 'React / Material Tailwind',
        href : 'https://jaafar-harabi.github.io/react-landing-page/'
      }
    ],
    "Contact App Management": [
      {
        id: 1,
        image: app,
        technologie: 'React / Node.js / Express.js / MongoDB / Material Tailwind',
        href : 'https://long-cyan-oyster-gown.cyclic.app/'
      }
    ],
    "Cart Store": [
      {
        id: 1,
        image: store,
        technologie: 'React / Material Tailwind',
        href : 'https://jaafar-harabi.github.io/cart-store/'
      }
    ],
    "Quotes Generator": [
      {
        id: 1,
        image: quote,
        technologie: 'React / Material Tailwind',
        href : 'https://jaafar-harabi.github.io/random-quote-generator/'
      }
    ]
  })

  
   
  return (
    <div id='projects'  >
    


            <div  id={theme} className='pt-36 pb-28'  >
                <h1 className='text-center text-font text-2xl'> My Latest Projects</h1>
            
                <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
                  <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                      {Object.keys(categories).map((category) => (
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            classNames(
                              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                              selected
                                ? 'bg-white text-blue-700 shadow'
                                : ' hover:bg-white/[0.12] hover:text-white'
                            )
                          }
                        >
                          {category}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                      {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                          key={idx}
                          className={classNames(
                            'rounded-xl  p-3',
                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                          )}
                        >
                          <div >
                            {posts.map((post) => (
                              <div
                                key={post.id}
                                className="relative rounded-md p-3  "
                              >
                  
                                

                                
                                    <img  src={post.image} alt='img' className='rounded-full' />
                                    <br />
                                  <h1 className='text-center font-bold'>  Technologies :    </h1>
                                           <br />
                                  <h1 className='text-center font-bold'>  {post.technologie}          </h1>
                                          
                                  
                                    <br />
                                    <div className='text-center'>

                                       <a href={post.href} target='_blank' rel='noreferrer'> <Button> Visit</Button>  </a> 

                                    </div>
                                  
                                

                              
                              </div>
                            ))}
                          </div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                </motion.div>
                
                
            
            </div>
            

    </div>

    
    
    
  )
}

export default Projects
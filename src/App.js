import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import AnimatedCursor from "react-animated-cursor"
import { useState,createContext } from 'react';
import { motion, useScroll,useSpring } from "framer-motion"
import {About,Contact,Foot,Head,Home,Projects} from './components'


export const ThemeContext = createContext(null);

if (process.env.REACT_APP_NODE_ENV === 'production') {
  disableReactDevTools();
}


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  
  
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}    >
      
      <div id={theme}>
            <Head  theme={theme} toggleTheme={toggleTheme}/>
            <motion.div className="progress-bar" style={{ scaleX }}/>
            <Home theme={theme}  />
            
            <About theme={theme} />
            <Projects theme={theme}/>
            <Contact theme={theme} />
            <Foot/>

            <AnimatedCursor className="z-50"  outerSize={50} color='30, 150, 243'outerAlpha={0.3} outerScale={2} clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              'text',
        
        
            ]}/>
      </div>
            
          
    
      
      

      
      
      
   
    

    </ThemeContext.Provider>
    
      
    
  );
}

export default App;

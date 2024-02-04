
import  {  useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
import {motion} from 'framer-motion'

function Contact({theme}) {
  
 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ed80mc1', 'template_qzpuvm9', form.current, 'aWkeZxQC_l_8HIHiV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>

    
    <div id='contact'   >
    <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className='py-44 '>
    <Card   shadow={false} className='items-center    ' id={theme}   >
        <Typography variant="h4"  className='text-font'>
          Contact 
        </Typography>
        
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={sendEmail} ref={form}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" name="user_name" />
            <Input size="lg" label="Email" name="user_email"/>
            <Textarea type="text" size="lg" label="Message" name="message"  />
          </div>
          
          <Button className="mt-6" fullWidth type='submit'  >
            Send
          </Button>
      
        </form>
      </Card>

    </motion.div>
     

    </div>
    </>
    
  )
}

export default Contact
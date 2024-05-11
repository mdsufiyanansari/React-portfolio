import React from 'react'
import { delay, easeInOut, motion } from "framer-motion"

const About = () => {
  return (
    <>
    
    <div className="h-screen center ">
<img src="images/ai back.png" alt="" className="w-full h-full brightness-[0.5]" />
      
      <div className="h-[90%] w-[90%]  absolute z-20 center flex gap-10 ">
      
      <div className="h-[80%] w-[40%]">
        <motion.img src="images/robot1.png" alt="" initial={{ opacity: 0.2,}}
              animate={{ opacity: 1, }}
              transition={{ duration:5, delay:4, repeat:Infinity, ease:"easeInOut", }}/>
      </div>
      
       <div className="h-[80%] w-[60%]  p-4">
        <div className="w-[180px] h-[180px] absolute ml-[40%]">
          <img src="images/my pic.jpg" alt="" className='w-[180px] h-[180px] border-4 border-green-600 rounded-full brightness-50' />
        </div>
        <motion.p className='text-2xl font-semibold text-green-600'initial={{ opacity: 0, x: 600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}>Hello, Welcome</motion.p>
        
        <motion.h1 className='text-5xl font-bold font-mono text-white mt-6'initial={{ opacity: 0, x: -600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}>I m Md Sufiyan Ansari</motion.h1>
               <motion.h1 className='text-5xl font-bold font-mono text-white mt-2'initial={{ opacity: 0, x: -600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}>& i m  a Web-Devloper</motion.h1>
        
        <motion.p className="text-gray-400  mt-6"initial={{ opacity: 0, x: 600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quod corporis perspiciatis nihil vitae quos, pariatur quibusdam cumque non error doloremque reprehenderit minus deleniti maiores recusandae voluptatum odio tempora! CorruptiLorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quod corporis perspiciatis nihil vitae quos, pariatur quibusdam cumque non error doloremque reprehenderit minus deleniti maiores recusandae voluptatum odio tempora! CorruptiLorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quod corporis perspiciatis nihil vitae quos, pariatur quibusdam cumque non error doloremque reprehenderit minus deleniti maiores recusandae voluptatum odio tempora! Corrupti</motion.p>
              
              <button className='text-green-600  p-2 text-xl font-semibold rounded-md mt-10 border-4 hover:shadow-xl hover:shadow-purple-400 border-b-black border-r-black hover:border-b-green-600 hover:border-r-green-600 border-t-green-600 border-l-green-600 hover:border-t-black hover:border-l-black duration-700 '>Download.CV</button>
       </div>
       
       </div>

    </div>
    
    </>
  )
}

export default About
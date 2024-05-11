import React from 'react'
import { delay, motion } from "framer-motion"
import { HashLink} from 'react-router-hash-link';








const Navbar = () => {
  return (
  <>
  
  <div  className="z-50  w-screen h-[80px] bg-opacity-55 backdrop-filter backdrop-blur-2xl  fixed flex justify-around">
    <div className=" w-[120px] h-[80px] center "><img src="images/infinite.png" alt="" /></div>
    <div className="text-xl p-5 flex font-mono text-green-600  font-semibold gap-[40px] ">
<motion.div className="text-green-700 font-bold cursor-pointer duration-500 text-2xl   hover:text-green-800"  initial={{ opacity: 0, x: -600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }} >Home</motion.div>

<motion.div className="cursor-pointer   hover:text-green-700 duration-500"  initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}> <HashLink smooth to ='/#service'>Service</HashLink></motion.div>
      
      <motion.div className="cursor-pointer   hover:text-green-700 duration-500"  initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}>About</motion.div>
      <motion.div className="cursor-pointer hover:text-green-700 duration-500 border-2 border-r-green-400 border-t-green-400 border-l-black px-2 hover:border-l-green-400 hover:border-b-green-400 hover:border-r-black hover:border-t-black  border-b-black"  initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}>Projects</motion.div>
      <motion.div className="cursor-pointer  hover:text-green-700 duration-500"  initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}>Skills</motion.div>
      <motion.div className="cursor-pointer  hover:text-green-700 duration-500"  initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}>Contact</motion.div>
    </div>
    <motion.button className="text-xl text-gray-600 font-mono font-semibold border-b-green-500 border-l-green-500 px-2  border-r-gray-600 border-t-gray-600 border-2 hover:text-white  hover:border-l-gray-600 hover:border-b-gray-600 hover:border-t-green-500 hover:border-r-green-500 h duration-500 mt-4 h-10 hover:shadow-xl hover:shadow-green-400" initial={{ opacity: 0, x: -900 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}>Hire me..</motion.button>

  </div>
  </>
  )
}

export default Navbar
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { delay, motion } from "framer-motion"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Service = () => {
  return (
    <>
    <div id="service">
    <h1 className=" bg-black text-gray-400 text-xl  px-40 py-4"><span className='text-5xl text-green-600 font-extrabold font-mono tracking-[3px]'>What we do</span> <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum vel repellat officiis modi facere tempore <br /> animi inventore obcaecati vitae.</h1>
    
    <div className="h-[700px] bg-black  center  relative">

<motion.div className="absolute w-[80%] h-[70%] border-2 border-green-600 rounded-xl shadow-2xl shadow-green-500"
initial={{ opacity: 0, y: -100 }}
animate={{ opacity: 1, y: 0 }}

transition={{ duration: 1,  delay: 1,type:"sprig"}}></motion.div>

    
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{ delay: 3000 }} 
      
    >

   {/* /-------------------------------CARD1----------------------------------- */}
      <SwiperSlide><div className="h-[400px] w-[800px] shadow-inner shadow-green-600 ml-[28%] rounded-md center flex gap-4 ">
        <div className="h-[350px] w-[50%] shadow-md rounded-xl shadow-green-600 ">
          <h1 className='w-full  h-[150px] bg-green-600 text-3xl font-bold p-4 rounded-br-full  '>UI/UX DESIGNE</h1>
          <p className="px-4 py-2 text-white text-xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia iusto atque voluptas debitis consequuntur?</p>
        </div>
        
        <div className=" rounded-b-xl shadow-sm shadow-green-600 h-[350px] w-[40%] bg-black">
        <video
        autoPlay
        loop
        muted
        className="object-cover rounded-b-xl w-full h-full"
      >
        <source src="images/chip.mp4" type="video/mp4" />
      </video>
        </div>
        </div></SwiperSlide>
     
     {/* ------------------------------------CARD2--------------------------------------- */}
      <SwiperSlide><div className="h-[400px] w-[800px] bg-black ml-[28%] rounded-md flex gap-4 center ">
      <div className="h-[350px] w-[50%] shadow-md rounded-xl shadow-green-600 ">
          <h1 className='w-full  h-[150px] bg-green-600 text-3xl font-bold p-4 rounded-br-full  '>WEB DESIGNE</h1>
          <p className="px-4 py-2 text-white text-xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia iusto atque voluptas debitis consequuntur?</p>
        </div>
        
        <div className=" rounded-b-xl shadow-sm shadow-green-600 h-[350px] w-[40%] bg-black">
        <video
        autoPlay
        loop
        muted
        className="object-cover rounded-b-xl w-full h-full"
      >
        <source src="images/videos earth.mp4" type="video/mp4" />
      </video>
        </div>
        </div></SwiperSlide>
      
      {/* ------------------------------------CARD3-------------------------------------------- */}
      <SwiperSlide><div className="h-[400px] w-[800px] bg-black flex gap-4 center  ml-[28%] rounded-md ">
      <div className="h-[350px] w-[50%] shadow-md rounded-xl shadow-green-600 ">
          <h1 className='w-full  h-[150px] bg-green-600 text-3xl font-bold p-4 rounded-br-full  '>WEB DEVELOPEMENT</h1>
          <p className="px-4 py-2 text-white text-xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia iusto atque voluptas debitis consequuntur?</p>
        </div>
        
        <div className=" rounded-b-xl shadow-sm shadow-green-600 h-[350px] w-[40%] bg-black">
        <video
        autoPlay
        loop
        muted
        className="object-cover rounded-b-xl w-full h-full"
      >
        <source src="images/green.mp4" type="video/mp4" />
      </video>
        </div>
        </div></SwiperSlide>
      
      {/* --------------------------------------CARD4------------------------------------------ */}
      <SwiperSlide><div className="h-[400px] w-[800px] bg-black flex gap-4 center  ml-[28%] rounded-md">
      <div className="h-[350px] w-[50%] shadow-md rounded-xl shadow-green-600 ">
          <h1 className='w-full  h-[150px] bg-green-600 text-3xl font-bold p-4 rounded-br-full  '>FREELANCER</h1>
          <p className="px-4 py-2 text-white text-xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia iusto atque voluptas debitis consequuntur?</p>
        </div>
        
        <div className=" rounded-b-xl shadow-sm shadow-green-600 h-[350px] w-[40%] bg-black">
        <video
        autoPlay
        loop
        muted
        className="object-cover rounded-b-xl w-full h-full"
      >
        <source src="images/hacking.mp4" type="video/mp4" />
      </video>
        </div>
        </div></SwiperSlide>
      ...
  
      
    </Swiper>
  
    </div>
    
    </div>
    
    </>
  )
}

export default Service

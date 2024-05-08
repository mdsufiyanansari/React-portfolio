import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";



function Project() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('progress', 1);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      
    }
  };

  return (
    <>

    <div className="h-screen  center">
        <img src="images/wallpaper4.png" alt="" className='absolute h-screen w-screen brightness-50 blur-sm'/>
        <h1 className='text-6xl z-10 absolute mb-[800px] font-extrabold font-mono tracking-[10px]'>Pro<span className='text-8xl text-green-500'>j</span>ects</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
      
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          
          
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper "
  
      >

        {/* /--------------------------------CARD-1---------------------------------- */}
        <SwiperSlide><div className="h-[500px] ml-[39%] w-[400px] rounded-b-md mb-8 bg-transparent shadow-md shadow-green-300">
            <div className="bg-gradient-to-tl from-green-600  to-black rounded-br-full h-[40%] w-full "> <img src="images/card img2.png" alt="" className='h-[100%]' /></div>
            <h1 className='text-3xl text-green-600 font-mono font-extrabold tracking-[5px] text-center'>C<span className='text-white'>a</span>l<span className='text-white'>c</span>u<span className='text-white'>l</span>a<span className="text-white">t</span>o<span className="text-white">r</span></h1>
            <p className='text-gray-400 px-4 font-mono mt-4'><span className='text-xl text-white'>Discription: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime nihil similique, sit totam reprehenderit earum aliquam magnam error harum.</p>

            <div className="flex center text-white gap-10 font-mono text-xl mt-6 px-4"> Language: 
            <div className="w-10 h-10  center ">
              <FaHtml5 className='h-10 text-orange-800'/>
            </div>
            <div className="w-10 h-10  center  ">
            <RiTailwindCssFill className='h-10 text-blue-300 '/>
            </div>
            <div className="w-10 h-10  center ">
            <TbBrandJavascript className='h-10 text-yellow-700'/>
            </div>
            <div className="w-10 h-10  center text-blue-950">
            <IoLogoReact className='h-10'/>
            </div>
            </div>
            
            </div></SwiperSlide>
        
        {/* ----------------------------------------------CARD-2(counter-app)----------------------------------------- */}
        <SwiperSlide>
        <div className="h-[500px] ml-[39%] w-[400px] rounded-b-md mb-8 bg-transparent shadow-md shadow-green-300">
            <div className="bg-gradient-to-tl from-green-600  to-black rounded-br-full h-[40%] w-full "> <img src="images/card img9.png" alt="" className='h-[100%]' /></div>
            <h1 className='text-3xl text-green-600 font-mono font-extrabold tracking-[5px] text-center'>C<span className='text-white'>o</span>u<span className='text-white'>n</span>t<span className='text-white'>e</span>r</h1>
            <p className='text-gray-400 px-4 font-mono mt-4'><span className='text-xl text-white'>Discription: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime nihil similique, sit totam reprehenderit earum aliquam magnam error harum.</p>

            <div className="flex center text-white gap-10 font-mono text-xl mt-6 px-4"> Language: 
            <div className="w-10 h-10  center ">
              <FaHtml5 className='h-10 text-orange-800'/>
            </div>
            <div className="w-10 h-10  center  ">
            <RiTailwindCssFill className='h-10 text-blue-300 '/>
            </div>
            <div className="w-10 h-10  center ">
            <TbBrandJavascript className='h-10 text-yellow-700'/>
            </div>
            <div className="w-10 h-10  center text-blue-950">
            <IoLogoReact className='h-10'/>
            </div>
            </div>
            
            </div>
        </SwiperSlide>
       
       {/* ------------------------------------CARD-3(watch)--------------------------------------- */}
        <SwiperSlide>
        <div className="h-[500px] ml-[39%] w-[400px] rounded-b-md mb-8 bg-transparent shadow-md shadow-green-300">
            <div className="bg-gradient-to-tl from-green-600  to-black rounded-br-full h-[40%] w-full "> <img src="images/card img5.png" alt="" className='h-[100%]' /></div>
            <h1 className='text-3xl text-green-600 font-mono font-extrabold tracking-[5px] text-center'>W<span className='text-white'>a</span>t<span className='text-white'>c</span>h</h1>
            <p className='text-gray-400 px-4 font-mono mt-4'><span className='text-xl text-white'>Discription: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime nihil similique, sit totam reprehenderit earum aliquam magnam error harum.</p>

            <div className="flex center text-white gap-10 font-mono text-xl mt-6 px-4"> Language: 
            <div className="w-10 h-10  center ">
              <FaHtml5 className='h-10 text-orange-800'/>
            </div>
            <div className="w-10 h-10  center  ">
            <RiTailwindCssFill className='h-10 text-blue-300 '/>
            </div>
            <div className="w-10 h-10  center ">
            <TbBrandJavascript className='h-10 text-yellow-700'/>
            </div>
            <div className="w-10 h-10  center text-blue-950">
            <IoLogoReact className='h-10'/>
            </div>
            </div>
            
            </div>
        </SwiperSlide>
        
        {/* ---------------------------------------------CARD-4(temperature app)--------------------------------------- */}
        <SwiperSlide>
        <div className="h-[500px] ml-[39%] w-[400px] rounded-b-md mb-8 bg-transparent shadow-md shadow-green-300">
            <div className="bg-gradient-to-tl from-green-600  to-black rounded-br-full h-[40%] w-full "> <img src="images/card img6.png" alt="" className='h-[100%]' /></div>
            <h1 className='text-3xl text-green-600 font-mono font-extrabold tracking-[5px] text-center'>T<span className='text-white'>e</span>m<span className='text-white'>p-</span>C<span className='text-white'>o</span>n<span className="text-white">v</span>e<span className="text-white">r</span>t<span className="text-white">e</span>r</h1>
            <p className='text-gray-400 px-4 font-mono mt-4'><span className='text-xl text-white'>Discription: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime nihil similique, sit totam reprehenderit earum aliquam magnam error harum.</p>

            <div className="flex center text-white gap-10 font-mono text-xl mt-6 px-4"> Language: 
            <div className="w-10 h-10  center ">
              <FaHtml5 className='h-10 text-orange-800'/>
            </div>
            <div className="w-10 h-10  center  ">
            <RiTailwindCssFill className='h-10 text-blue-300 '/>
            </div>
            <div className="w-10 h-10  center ">
            <TbBrandJavascript className='h-10 text-yellow-700'/>
            </div>
            <div className="w-10 h-10  center text-blue-950">
            <IoLogoReact className='h-10'/>
            </div>
            </div>
            
            </div>
        </SwiperSlide>
        
        {/* -----------------------------------------------CARD-5(filter card)---------------------------------- */}
        <SwiperSlide>
        <div className="h-[500px] ml-[39%] w-[400px] rounded-b-md mb-8 bg-transparent shadow-md shadow-green-300">
            <div className="bg-gradient-to-tl from-green-600  to-black rounded-br-full h-[40%] w-full "> <img src="images/card img10.png" alt="" className='h-[100%]' /></div>
            <h1 className='text-3xl text-green-600 font-mono font-extrabold tracking-[5px] text-center'>F<span className='text-white'>i</span>l<span className='text-white'>t</span>e<span className='text-white'>r</span>-c<span className="text-white">a</span>r<span className="text-white">d</span></h1>
            <p className='text-gray-400 px-4 font-mono mt-4'><span className='text-xl text-white'>Discription: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime nihil similique, sit totam reprehenderit earum aliquam magnam error harum.</p>

            <div className="flex center text-white gap-10 font-mono text-xl mt-6 px-4"> Language: 
            <div className="w-10 h-10  center ">
              <FaHtml5 className='h-10 text-orange-800'/>
            </div>
            <div className="w-10 h-10  center  ">
            <RiTailwindCssFill className='h-10 text-blue-300 '/>
            </div>
            <div className="w-10 h-10  center ">
            <TbBrandJavascript className='h-10 text-yellow-700'/>
            </div>
            <div className="w-10 h-10  center text-blue-950">
            <IoLogoReact className='h-10'/>
            </div>
            </div>
            
            </div>
        </SwiperSlide>
        
        {/* /-----------------------------------------------CARD-6(weight converter)---------------------------------------- */}
        <SwiperSlide>
        <div className="h-[500px] ml-[39%] w-[400px] rounded-b-md mb-8 bg-transparent shadow-md shadow-green-300">
            <div className="bg-gradient-to-tl from-green-600  to-black rounded-br-full h-[40%] w-full "> <img src="images/card img8.png" alt="" className='h-[100%] ' /></div>
            <h1 className='text-3xl text-green-600 font-mono font-extrabold tracking-[5px] text-center'>W<span className='text-white'>e</span>i<span className='text-white'>g</span>h<span className='text-white'>t-</span>c<span className="text-white">o</span>n<span className="text-white">v</span>e<span className="text-white">r</span>t<span className="text-white">e</span>r</h1>
            <p className='text-gray-400 px-4 font-mono mt-4'><span className='text-xl text-white'>Discription: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime nihil similique, sit totam reprehenderit earum aliquam magnam error harum.</p>

            <div className="flex center text-white gap-10 font-mono text-xl mt-6 px-4"> Language: 
            <div className="w-10 h-10  center ">
              <FaHtml5 className='h-10 text-orange-800'/>
            </div>
            <div className="w-10 h-10  center  ">
            <RiTailwindCssFill className='h-10 text-blue-300 '/>
            </div>
            <div className="w-10 h-10  center ">
            <TbBrandJavascript className='h-10 text-yellow-700'/>
            </div>
            <div className="w-10 h-10  center text-blue-950">
            <IoLogoReact className='h-10'/>
            </div>
            </div>
            
            </div>
        </SwiperSlide>
        
        
        <div className="autoplay-progress z-10 text-white bg-gradient-to-tr from-green-600 to-black" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className='text-2xl font-mono font-bold ml-10'></span>
        </div>
      </Swiper>
      </div>

    </>
  );
}

export default Project;

              
            
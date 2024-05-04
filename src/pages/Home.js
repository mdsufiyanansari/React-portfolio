import React from 'react';
import { motion } from "framer-motion"




const VideoBackground = () => {
  return (
    <div className="w-full h-screen">
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
      >
        <source src="images/galexy.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black opacity-80">

      <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
    Building Your Brand
		</text>
	</svg>
</div>

</div>
      
   
    </div>
  );
};

export default VideoBackground;

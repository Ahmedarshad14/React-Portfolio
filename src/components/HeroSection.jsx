import React from 'react'
import Typewriter from 'typewriter-effect'
const HeroSection = () => {
  return (<>
   <div className="flex flex-col md:flex-row bg-green-100 mb-0 pb-0">
   <div className='md:w-1/2 md:h-4/5 md:flex md:justify-between text-center md:text-left mb-0 pb-0'>
   <div className="pl-3 mb-0 pt-96 md:pb-0 md:mt-auto text-6xl text-[#1b3d38] font-nibbold tracking-wider">
   <Typewriter
   options={{
     strings: ['Crafting Digital Excellence,', 'One Line of Code at a time.'],
     autoStart: true,
     loop: true,
   }}
 /> </div>
						
   </div>
   <div className="md:w-1/2 md:h-4/5 flex items-center justify-center">
   <img
							src="/src/assets/tech-bg.jpg"
							alt=""
							className="md:rounded-3xl rounded-full"
						/>
   </div>
   
   </div>  
   <div className="w-full mt-0 pt-0 mb-0 pb-0">
   <span className='font-nibblack md:text-[24rem] tracking-widest text-[#1b3d38] text-center md:text-left pb-0 mb-0 mt-0'>CODEO</span>
   </div></>
   )
}

export default HeroSection
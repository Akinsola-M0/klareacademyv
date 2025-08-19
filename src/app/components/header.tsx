"use client"
import Image from "next/image";
import {motion} from "framer-motion"
import heroImage from "../../../public/pictureII.jpg"
import logo from "../../../public/K L A R E ACADEMY.png"


export default function Header() {
  return (
    <section className ="w-screen h-3/6 lg:h-4/5 overflow-hidden text-white py-2 bg-red-500 text-center relative z-10">
      <div className="w-screen h-full lg:h-full overflow-hidden absolute left-0 top-0 z-0">
        <Image 
        src = {heroImage}
        fill={true}
        alt="hero"
        objectFit="cover"
        />
      </div>
      <div className="w-screen h-full lg:h-full bg-red-500 opacity-50 overflow-hidden absolute left-0 top-0 z-10">
        
      </div>
      <div className="w-screen h-24 lg:h-40  relative z-20">
        <div className="h-24 w-24 lg:h-32 lg:w-32 absolute top-0 left-0 z-20" >
            <Image 
               src = {logo}
               alt="logo"
               fill={true}
               objectFit="cover"
               />     
        </div>

      </div>
        
        <div className="mt-6 lg:mt-0 flex flex-col items-center justify-center h-1/2 relative z-20 opacity-40">
            <h1 className="text-3xl  md:text-5xl lg:text-9xl font-bold mb-4"> KLARE ACADEMY </h1>

            <div>
        <p className="text-sm md:text-xl lg:text-2xl mb-6">Empowering Students in ICT & Computer Science</p>
        </div>
        </div>

         <div className="lg:mt-6 relative z-20">
          
            <motion.button
      className=""
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.7, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <a href="#register" className="bg-white text-red-600 lg:py-5 lg:px-20 lg:text-2xl  px-6 py-2 rounded-full font-semibold ">
        Enroll Now
      </a>
    </motion.button>
          
          </div>
         
        
    </section>
  );
}

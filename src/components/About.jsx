import React from 'react'
import Aboutimage from './../assests/about.png'
const About = () => {
  return (
    <>
    
    
    
    <div id='About'
    className=' max-w-screen-lg h-screen mx-auto flex items-center justify-center w-screen gap-10 px-4 max-sm:relative'>
      
    
      <div className='h-56 w-56 bg-teal-400 rounded-full blur-[170px] z-[-1] absolute top-0 right-[85px] '/>
        <div className='flex-1 w-full h-full flex justify-center items-center max-md:hidden'>
        <img src={Aboutimage}alt="" className='h-auto  rounded-3xl max-w-sm'/>
        </div>
        <div>
        <div className='flex-1 w-full h-full flex flex-col gap-9 justify-center'> 
        <h3 className='text-black font-bold text-center font-serif text-5xl mb-5'>ABOUT</h3>
        <p className='text-xl flex justify-start  text-black font-poppins md:text-md'>I'm currently in my second year of pursuing a B.Tech degree, and my passion lies in web development. I'm a dedicated problem solver with a background in engineering, excelling in effective communication and creative thinking. And I'm currently in the track of mastering MERN stack.</p>
        </div>
        </div>
        
        </div>

        </>
  )
}

export default About

import React from 'react'
import Homeimage from './../assests/Homeimage.png'
const Home = () => {
  return (
    <div 
    id="Home"
    className='h-screen  text-black bg-white-200 w-full  '>
        <div className='h-56 w-56 bg-teal-400 rounded-full blur-[170px] z-[-1] absolute  right-[85px]'/>
        <div className='h-56 w-56 bg-teal-400 rounded-full  blur-[210px] z-[-1] bottom-0 absolute left-[95px]'/>
        <div className='max-w-screen-lg mx-auto flex   items-center justify-center h-full px-4 max-md:flex-col'>
            <div className=' flex flex-col justify-center h-full flex-2'>
                <h2 className='text-1xl sm:text-3xl font-poppins text-black font-semibold '>Hi There... I'm</h2>
                <h3 className='text-2xl sm:text-5xl  font-bold font-sans text-teal-400'>SHRI BHARANI PRIYA N</h3>
                <h2 className='text-1xl sm:text-2xl font-poppins text-black '>Front-End Developer</h2>
            </div>
            <div className='flex flex-1 '> 
              <img src={Homeimage} alt="" className='md:w-full rounded-2xl mx-auto' />
            </div>
        </div>
        
    </div>
  )
}

export default Home

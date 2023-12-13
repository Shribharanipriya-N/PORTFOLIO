import React from 'react'
import Projectcard from './Projectcard'
import knowmynation from './../assests/knowmynation.png'
import portfolio from './../assests/Portfolio.png'
const Projects = () => {
    const projects = [
        {
            id: 1,
            imgUrl: knowmynation,
            title: "Know My Nation",
            description: "A simplified Website to know everything about India",
            href1: "https://github.com/Shribharanipriya-N/KNOW-MY-NATION",
            href2: "https://knowmynation.netlify.app/",
          },
        {
          id: 2,
          imgUrl: portfolio,
          title: "Portfolio Website",
          description: "My portfolio  that showcases my  skills ",
          href1: "https://github.com/Shribharanipriya-N/PORTFOLIO ",
          href2: "https://shribharanipriya_n.netlify.app/",
        },
      ];
      
return (

<div id="Projects" className='px-[17%]   w-full h-screen max-sm:h-screen text-white max-sm:pt-20 max-sm:px-4'>
<div className='h-56 w-56 bg-teal-400 rounded-full blur-[170px] z-[-1] absolute '/>
    <div classname=" max-w-screen p-4 flex flex-col justify-center w-screen h-full">
        <div className=' pb-11'>
            <p className='font-sansserif-lemonmilk text-5xl font-bold text-black font-serif  inline font-FD'>PROJECT</p>
            
        </div>

        <div className='flex  flex-wrap w-screen gap-10 font-poppins px-12 sm:px-0'>

        {
            projects.map((data)=>(
                <Projectcard {...data} />          
            ))
        }

        </div>
    </div>
</div>
)
}

export default Projects

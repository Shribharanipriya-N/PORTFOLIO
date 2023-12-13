import React from 'react'
import html from './../assests/icons-html.svg'
import css from './../assests/icons-css.svg'
import js from './../assests/js.svg'
import react from './../assests/icons-react.svg'
import tailwind from './../assests/icons-tailwind-css.svg'
import node from './../assests/node.png'
import github from './../assests/icons-github.svg'

const Skills = () => {
  const skill=[
    {
      id:1,
      src:html,
    },
    {
      id:2,
      src:css,
    },
    {
      id:3,
      src:js,
    },
    {
      id:4,
      src:react,
    },
    {
      id:5,
      src:tailwind,
    },
    {
      id:6,
      src:node
    },
    {
      id:7,
      src:github,
    }
  ];
  return (
    <div 
    id="Skills"
    className='h-screen  text-black w-full  max-sm:h-screen max-md:mt-11'>
        <div className='h-56 w-56 bg-teal-400 rounded-full blur-[170px] z-[-1]  absolute right-[95px]'/>
        <div className='h-56 w-56 bg-teal-400 rounded-full  bottom-0 blur-[170px] z-[-1]  absolute left-[95px]'/>
        <div className='max-w-screen-lg mx-auto flex flex-col  justify-center  h-full px-8 '>
        <div className=' pb-11'>
            <p className='text-6xl font-bold font-serif text-black mb-5 '>SKILLS</p>
            </div>
            <div className='flex  flex-wrap w-auto gap-10 px-12 sm:px-0'>
               {
                skill.map(({id, src})=>(
                <div key={id} className={' flex hover:scale-105  h-[150px] w-[150px] max-sm:h-[75px] max-sm:w-[75px] max-sm:rounded-xl shadow-2xl justify-center items-center rounded-xl'}>
                  <img src={src} alt="" className=' h-[95px] w-[94px] max-sm:h-[55px] max-sm:w-[55px]  max-sm:rounded-xl rounded-xl mx-auto'/>
                </div>
          ))
        }
        </div>  
        </div>
    </div>
  )      
}

export default Skills;

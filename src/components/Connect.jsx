import React from 'react'
import Github from './../assests/icons-github.svg'
import Linkedin from './../assests/icons-linkedin.png'
import connectimage from './../assests/connect.png'
import mail from './../assests/mail.svg'

const Connect = () => {
  const connectLinks = [
    {
      icon: Github,
      name: "SHRIBHARANIPRIYA_N",
      href: "https://github.com/Shribharanipriya-N",
    },
    
    {
      icon: Linkedin,
      name: "SHRI BHARANI PRIYA N",
      href: "https://www.linkedin.com/in/shribharanipriyan/",
    },
    {
      icon:mail,
      name:"SHRI BHARANI PRIYA N",
      href: "mailto:shribharanipriya2004@gmail.com"
    }
    
  ];
  
  return (
    <div id="Connect" className='max-w-screen-lg h-screen mx-auto  flex items-center justify-center w-screen gap-10 px-4'>
      <div className='h-56 w-56 bg-teal-400 rounded-full blur-[170px] z-[-1] absolute right-[95px] '/>
        <div className='flex-1 w-full h-full flex justify-center items-center max-sm:hidden'>
        <img src={connectimage} alt='' className="h-auto  rounded-3xl max-w-sm" />
        </div>
        <div className="flex-1 w-full max-sm:ml-[59px] h-full flex flex-col gap-9 justify-center">
        <div className="text-black font-serif font-bold text-5xl  max-md:text-3xl">
          CONNECT WITH ME
        </div>
        <div className="flex font-poppins flex-col gap-3">
          {connectLinks.map((item) => (
            <div
              key={item.icon}
              className="flex gap-4 items-center"
            >
              <a
                href={item.href}
                className="h-11 w-11 flex justify-center items-center"
                target="blank"
              >
                <img src={item.icon}alt='' className={`${item.styles}`} />
              </a>
              <h2 className="text-black font-[500] text-xl ">
                {item.name}
              </h2>
            </div>
            
          ))}
        </div>
      </div>
      </div>
      

  )
}

export default Connect

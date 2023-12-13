import React from 'react'
import Logo from './../assests/B.png'
const Navbar = () => {
    const navLinks = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Projects", label: "Projects" },
        { href: "#Skills", label: "Skills"},
        { href: "#Connect", label: "Connect" },
      ];
  return (
    
    <div className="flex  justify-center mt-5 "
    >
      
      <nav className="w-[75%]  h-[85px] py-[5px] border border-teal-400 pr-10 shadow-lg border-opacity-25 rounded-full flex items-center justify-between max-sm:scale-90 max-sm:w-[90%] backdrop-blur-2xl">
        <img src={Logo} alt='' className="h-[75px] w-[75px] rounded-full ml-1 " />
        <ul className="flex gap-6 font-serif max-sm:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="cursor-pointer">
              <a
                href={item.href}
                className=" max-lg:text-[20px]  text-lg text-black hover:border-b-[3px] hover:border-teal-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

"use client"
import React,{useCallback} from 'react'

export default function Navbar() {
  const scrollToSection = useCallback((id:any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);  return (
    <>
    <header  className="flex py-5 justify-between">
      <div className="text-[30px] font-semibold font-sen pl-10 ">
      <span className="text-[#77effc] ">ABDUL</span> WASSAY
      </div>
      <nav>
        <ul className="font-roboto flex md:flex-row mt-2.5  text-[20px]  lg:mr-20 md:mr-6 flex-col  ">
          <li onClick={()=> scrollToSection('home')} className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-[3px] hover:text-[#77effc]">Home</li>
          <li onClick={()=> scrollToSection('about')} className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-[3px] hover:text-[#77effc]">About</li>
          <li onClick={()=> scrollToSection('skills')} className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-[3px] hover:text-[#77effc]">Skills</li>
          <li onClick={()=> scrollToSection('portfolio')} className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-[3px] hover:text-[#77effc]">Portfolio</li>
          <li onClick={()=> scrollToSection('contact')} className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-[3px] hover:text-[#77effc]">Contact</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

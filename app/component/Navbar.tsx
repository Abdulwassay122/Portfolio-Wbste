import React from 'react'

export default function Navbar() {
  return (
    <>
    <header className="flex py-5">
      <div className="text-[30px] font-semibold font-sen pl-10 ">
      <span className="text-[#77effc] ">ABDUL</span> WASSAY
      </div>
      <nav>
        <ul className="font-roboto flex mt-2.5  text-[20px] ml-[800px]">
          <li className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-2 hover:text-[#77effc]"><a href="/">Home</a></li>
          <li className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-2 hover:text-[#77effc]"><a href="/">About</a></li>
          <li className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-2 hover:text-[#77effc]"><a href="/">Skills</a></li>
          <li className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-2 hover:text-[#77effc]"><a href="/">Portfolio</a></li>
          <li className="mx-3 hover:border-solid hover:border-[#77effc] hover:border-b-2 hover:text-[#77effc]"><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

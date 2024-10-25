import React from 'react'
import Pic from './Untitled design (7)12.png'

export default function Home() {
  return (
    <>
      <section className='flex mt-10 mb-10  '>
        <div className='mt-32 mr-80 ml-20'>
          <div className='text-3xl font-sen font-semibold'>Hello It's me</div>
          <div className='text-8xl font-sen font-semibold'>ABDUL <div className='text-[#77effc]'>WASSAY</div></div>
          <div className='mt-5 text-3xl font-sen font-semibold'>And I'm a <span className='text-red-400 border-solid border-r-4 pr-2 border-white'>Frontend Developer</span></div>
          <div>
            <button  className='bg-[#77effc] py-2 px-6 rounded-md mt-10 font-roboto font-semibold'>Download CV</button>
            <button  className='bg-[#77effc] py-2 px-6 rounded-md mt-10 ml-7 font-roboto font-semibold'>Contact</button>
          </div>
        </div>
        {/* image */}
        <div>
        <div ><img className='h-[600px]  bg-gradient-to-r from-black-500 ' src={Pic.src} alt="" /></div>
        <div className='ml-[850px] mt-[550px] w-[618px] absolute inset-0 bg-gradient-to-t from-black from-2%'></div>
        </div>
      </section>
    </>
  )
}

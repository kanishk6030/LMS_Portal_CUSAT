import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-full h-[40vh] bg-[#0a0a0a]'> 
    <div className='boundary-line bg-amber-50 opacity-15 w-full h-[1px]'></div>
    <div className='w-full h-full flex flex-col justify-center items-center text-neutral-500 text-sm '>
      <div className='w-full h-full flex flex-row justify-center items-start '>
        <div className='w-[33%] h-full flex flex-col justify-center items-start px-8'>
        <h1 className='text-lg font-semibold text-white'>Cochin University of Science and Technology</h1>
        <p className='text-white/50'>Thrikkakara Campus South Kalamassery</p>
        <p className='text-white/50'>Kochi, Kerala 682022</p>

        <h1 className='text-lg font-semibold mt-5 text-white'>Cochin University College of Engineering Kuttanad</h1>
        <p className='text-white/50'>Kidangara Mankombu Rd, Kannady</p>
        <p className='text-white/50'>Pullinkunnu, Kerala 688504</p>
      </div>

      <div className=' w-[33%] h-full'>
        <div className='flex flex-col justify-start items-center h-full pt-11 gap-2'>
          <h1 className='text-lg font-semibold text-white'>Navigate</h1>
          <Link to='/' className='text-white/50 text-base text-[18px]'>Home</Link >
          <Link to='/about' className='text-white/50 text-base text-[18px]' >About</Link >
          <Link to='/faculty' className='text-white/50 text-base text-[18px]'>Faculty</Link >
          <Link to='/courses' className='text-white/50 text-base text-[18px]'>Courses</Link >
        </div>
      </div>

      <div className=' w-[33%] h-full'>
        <div className='flex flex-col justify-start items-center h-full pt-11 gap-2'>
          <h1 className='text-lg font-semibold text-white'>Other</h1>
          <Link to='/' className='text-white/50 text-base text-[18px]'>Anti-Ragging Cell</Link >
          <Link to='/' className='text-white/50 text-base text-[18px]' >GRC</Link >
        </div>
      </div>

<div className=' w-[33%] h-full'>
        <div className='flex flex-col justify-start items-center h-full pt-11 gap-2'>
          <h1 className='text-lg font-semibold text-white'>Programs</h1>
          <Link to='/' className='text-white/50 text-base text-[18px]'>B-Tech</Link >
          <Link to='/' className='text-white/50 text-base text-[18px]' >Research</Link >
          <Link to='/' className='text-white/50 text-base text-[18px]' >MCA</Link >
        </div>
      </div>
      <div className=' w-[33%] h-full'>
        <div className='flex flex-col justify-start items-center h-full pt-11 gap-2'>
          <h1 className='text-lg font-semibold text-white'>Contact Us</h1>
          <p className='text-white/50 text-base'>Email: info@cusat.ac.in</p>
          <p className='text-white/50 text-base '>Phone: +91 484 257 5000</p>
        </div>
      </div>
      </div>
      <div className='boundary-line bg-amber-50 opacity-15 w-full h-[1px] '></div>
      <div className='max-w-full min-w-full text-end center pt-2 text-white/50 text-sm '>
        @ 2024 CUSAT LMS Portal. All rights reserved.
      </div>
    </div>
    </footer>
  )
}

export default Footer
import React from 'react'

function Navbar() {
  return (
    <>
        <div className='bg-transparent p-5 z-10'>
           <div className='flex flex-row'>
              <div className='sixtyfour-fancy text-white text-2xl relative top-1 font-black uppercase basis-1/12 pl-5'>mr.jim</div>
              <div className='basis-1/2'></div>
              <div className='text-white basis-1/2'>
                <div className='grid grid-cols-4'>
                  <button className='text-white font-medium text-center basis-1/6 transition duration-700 p-2 rounded-full hover:bg-[#1e293b] '>Home</button>
                  <button className='text-white font-medium text-center basis-1/6 transition duration-700 p-2 rounded-full hover:bg-[#1e293b] '>About</button>
                  <button className='text-white font-medium text-center basis-1/6 transition duration-700 p-2 rounded-full hover:bg-[#1e293b] '>Skills</button>
                  <button className='text-white font-medium text-center basis-1/6 transition duration-700 p-2 rounded-full hover:bg-[#1e293b] '>Projects</button>
                </div>
              </div>
           </div>
        </div>
    </>
  )
}

export default Navbar
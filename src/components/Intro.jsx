import React from 'react'

function Intro() {
  return (
    <>
        <div className='flex flex-row gap-10'>
            <div className='basis-1/3 mx-20'>
                <div className='text-white text-9xl font-black'>Create Maintain Improve</div>
                <div className='grid grid-cols-2 gap-4 mt-14'>
                    <button className='text-white bg-[#1e293b] hover:bg-[#333e52] text-2xl font-bold text-center rounded-full shadow-lg shadow-white py-5 relative'>
                        Get started
                    </button>
                    <button className='text-white text-2xl font-bold text-center rounded-full py-5 relative'>
                        Learn more 
                    </button>
                    
                </div>
            </div>
            <div className='basis-1/2 grow'>
                <div className='bg-cover bg-center py-72 animate' style={{backgroundImage: "url('/image.png')"}}></div>
            </div>
        </div>
    </>
  )
}

export default Intro
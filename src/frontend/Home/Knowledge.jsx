import React from 'react'
import image12 from '../assets/download-removebg-preview (4).png'
import image13 from '../assets/1705380179746-removebg-preview.png'

function Knowledge() {
  return (
    <>
    <div className='flex flex-col  items-center py-20 justify-center p-4 md:px-40 space-y-10 md:space-y-0 md:space-x-20 bg-gray-200'>
        <div>
            <h1 className="text-center text-4xl font-bold mb-6 text-[#160E53]">Acknowledgements</h1>
            <hr className="border-t-2 border-gray-400 w-1/2 mx-auto mb-6" />
        </div>
        <div className='flex md:flex-row flex-col'>
            <img src={image12} alt="Image related to acknowledgements" className="max-w-full h-auto" />
            <img src={image13} alt="Image related to acknowledgements" className="max-w-1/2 h-auto" />
        </div>
    </div>
    </>
  )
}

export default Knowledge

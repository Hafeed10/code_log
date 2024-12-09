import React, { useState } from 'react';
import { BsMenuDown, BsX } from "react-icons/bs";
import Log1 from '../assets/Questions-pana.png';

function Home_First() {
    // State to manage navbar visibility
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    // Function to toggle navbar visibility
    const toggleNavbar = () => {
        setIsNavbarVisible((prevState) => !prevState);
    };

    return (
        <div className='bg-gradient-to-b from-gray-200 to-gray-300 min-h-screen'>
            {/* Navbar */}
            <div className='relative flex items-center justify-between p-4 md:px-40 py-10'>
                {/* Logo or Title */}
                <h1 className='text-3xl font-bold'>CODELOGIC</h1>

                {/* Icon (end of the row) */}
                <div
                    onClick={toggleNavbar}
                    className='cursor-pointer p-2 rounded-md hover:bg-gray-200'
                >
                    {isNavbarVisible ? <BsX size={24} /> : <BsMenuDown size={24} />}
                </div>

                {/* Navbar (conditionally rendered) */}
                {isNavbarVisible && (
                    <div
                        className='absolute top-16 left-0 w-full z-10 py-4'
                    >
                        <ul className='flex flex-col gap-4 justify-center items-center md:flex-row md:gap-15'>
                            <li className='p-2 cursor-pointer hover:text-blue-500'>Home</li>
                            <li className='p-2 cursor-pointer hover:text-blue-500'>About</li>
                            <li className='p-2 cursor-pointer hover:text-blue-500'>coding channels on youtube</li>
                            <li className='p-2 cursor-pointer hover:text-blue-500'>Contact</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Hero Section */}
            <div className='flex flex-col md:flex-row items-center justify-between p-4 md:px-40 space-y-10 md:space-y-0 md:space-x-20'>
                {/* Text Section */}
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold leading-tight text-gray-800'>
                        Light Up <br />
                        Your Coding <br /> Journey
                    </h1>
                    <div className='bg-[#0C154E] w-1/2 p-1 rounded-full mt-5 hover:bg-[#131d5d] duration-150 transition-all ease-in cursor-pointer'>
                        <h1 className='text-white content-center text-center font-thin' >Get Starrted</h1>
                    </div>
                </div>

                {/* Image Section */}
                <img className='w-full md:w-1/2' src={Log1} alt="Coding Illustration" />
            </div>
        </div>
    );
}

export default Home_First;

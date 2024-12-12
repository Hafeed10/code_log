import React from 'react';
import image from '../assets/led-removebg-preview.png';

const AboutSection = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between p-4 md:px-40 space-y-10 md:space-y-0 md:space-x-20 py-10 bg-gray-200">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-5 md:mb-0 md:mr-8">
                <img
                    src={image}
                    alt="LED technology illustration"
                    className="w-64 h-auto"
                />
            </div>

            {/* About Us Section */}
            <div className="text-center md:text-left max-w-3xl">
                <h1 className="text-4xl font-bold mb-4 px-4 text-[#160E53]">About Us</h1>
                <p className="text-lg text-gray-700 leading-relaxed px-4 md:text-start text-center">
                    Codight is a web development platform designed to streamline the coding process for beginners and professionals alike.
                    With a live HTML editor and a variety of resources, Codight makes it easier to create and test code in real time. Whether
                    you're just starting out or looking to enhance your skills, Codight offers tutorials, coding examples, and a user-friendly
                    interface to help you on your journey to becoming a proficient web developer.
                </p>
                {/* Get Started Button */}
                <div
                    className="bg-[#0C154E]  md:w-60 w-40 max-w-sm p-1 rounded-full mt-5 hover:bg-[#131d5d] transition duration-150 ease-in-out cursor-pointer mx-5 md:mx-0"
                    role="button"
                    aria-label="Get Started with Codight"
                >
                    <h2 className="text-white text-center  font-thin">Get Started</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

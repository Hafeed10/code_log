import React from 'react';
import { FiSun } from "react-icons/fi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { SiEditorconfig } from "react-icons/si";

function Our_Features() {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-200 py-10 ">
      <div className="flex flex-col py-10 p-4 md:px-40 space-y-10 md:space-y-0 md:space-x-0 bg-gray-200">
        <div className="mb-12">
          <h1 className="text-center text-4xl font-bold mb-6 text-[#160E53]">Our Features</h1>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="flex flex-col items-center p-6 bg-[#F2EEEE] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FiSun size={40} className="text-yellow-500 mb-4" />
            <h1 className="text-md font-thin text-center">Free basic coding tutorials</h1>
          </li>
          <li className="flex flex-col items-center p-6 bg-[#F2EEEE] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <TiLocationArrowOutline size={40} className="text-blue-500 mb-4" />
            <h1 className="text-md font-thin text-center">Pre-recorded classes and simplified learning</h1>
          </li>
          <li className="flex flex-col items-center p-6 bg-[#F2EEEE] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <SiEditorconfig size={40} className="text-green-500 mb-4" />
            <h1 className="text-md font-thin text-center">Free online editor and more</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Our_Features;

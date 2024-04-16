import React from 'react';
import stu1 from "../Assets/stu5.jpg";
import coa from"../Assets/COA.png"

export default function Homepage() {
  return (
    <div className="h-screen overflow-hidden flex">
      <div className="w-1/2 relative">
        {/* Image with gradient overlay */}
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <img src={stu1} className="object-cover w-full h-full" alt="Student" />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-20">
          <div className="w-full h-full bg-gradient-to-l from-[#9563E1] to-transparent"></div>
        </div>
      </div>
      <div className="w-1/2 bg-[#9563E1] flex flex-col justify-center items-center">
        <img src={coa}></img>
        <h1 className='text-white pl-10 text-4xl  font-bold'>THE ARMY UNIVERSITY             
        COLLEGE</h1><sm className="text-white pb-10">student/staff Portal</sm>
        <div className="flex gap-10 justify-center items-center  pb-10">
          <div>
            <label className="inline-flex items-center" htmlFor="indigoCheckBox">
              <input id="indigoCheckBox" type="checkbox" className="w-6 h-6 rounded-full border-2 border-indigo-700 focus:ring-indigo-400" 
              />
              <span className="ml-2">Student</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center" htmlFor="lecturerCheckBox">
              <input id="lecturerCheckBox" type="checkbox" className="w-6 h-6 rounded-full border-2 border-indigo-700 focus:ring-indigo-400" />
              <a href="/lechome" class=" ml-2">Lecturer</a>
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-md shadow">
            <a href="/stusignup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              SIGN UP
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="/stulogin" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              LOG IN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

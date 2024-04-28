import React from 'react';
import stu1 from "../Assets/stu4.jpg";
import coa from"../Assets/COA.png"
import coa2 from "../Assets/COA10.png"

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
        <img src={coa2} class="w-96 h-96 pt-10"></img>
                  <sm className="text-yellow-400 font-semibold pb-10">STUDENT AND STAFF PORTAL</sm>
        <div className="flex gap-10 justify-center items-center  pb-10">
          <div>
            <label className="inline-flex items-center" htmlFor="indigoCheckBox">
              <input id="indigoCheckBox" type="checkbox" className="w-6 h-6 rounded-full border-2 border-indigo-700 focus:ring-indigo-400" 
              />
              <span className="ml-2 text-white">Student</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center" htmlFor="lecturerCheckBox">
              <input id="lecturerCheckBox" type="checkbox" className="w-6 h-6 rounded-full border-2 border-indigo-700 focus:ring-indigo-400" />
              <a href="/lechome" class=" ml-2 text-white">Lecturer</a>
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center">

          <div className="mt-3 sm:mt-0 sm:ml-3">
          
          </div>
          <div class="flex flex-wrap items-start justify-end -mb-3">
          <a href='/stulogin' class="inline-flex px-5 py-3 font-semibold text-purple-700 bg-white hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3"> 
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Login
          </a>
          <a href='/stusignup' class="inline-flex px-5 py-3 font-semibold text-white bg-purple-800 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          Register
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

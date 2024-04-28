// import React from 'react';
// import stu1 from "../Assets/stu6.jpg";
// import coa from"../Assets/coa5.png"


// export default function LecHome() {
   
//   return (
//     <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
//   <div class="absolute inset-0">
//     <img src={stu1} alt="Background Image" class="object-cover object-center w-full h-full" />
//     <div class="absolute inset-0 bg-[#9563E1]  opacity-60"></div>
//   </div>
  
//   <div class="relative z-10  flex flex-col justify-center items-center h-full text-center">
//     <img src={coa} class="w-48 h-48"></img>
//     <h1 class="text-5xl font-bold leading-tight mb-4">The Army University College</h1>
//     <p class="text-lg text-gray-300 mb-8">students/staff portal</p>
//     <div className="flex gap-10 justify-center items-center  pb-10">
//           <div>
//             <label className="inline-flex items-center" htmlFor="indigoCheckBox">
//               <input id="indigoCheckBox" type="checkbox" className="w-6 h-6 rounded-full border-2 border-indigo-700 focus:ring-indigo-400" 
//               />
//               <a href='/' className="ml-2">Student</a>
//             </label>
//           </div>
//           <div>
//             <label className="inline-flex items-center" htmlFor="lecturerCheckBox">
//               <input id="lecturerCheckBox" type="checkbox" className="w-6 h-6 rounded-full border-2 border-indigo-700 focus:ring-indigo-400" />
//               <a href="" class=" ml-2">Lecturer</a>
//             </label>
//           </div>
//         </div>
//         <div className='flex justify-center items-center mt-3 sm:mt-0 sm:ml-3' >
//     <div >
//     <a href="lecsignup" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-3  rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Register</a></div>
// <div className='mt-3 sm:mt-0 sm:ml-3'>
//     <a href="/leclogin" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-3  rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Login </a></div>
//     </div>
//   </div>
// </div>



//   );
// }


import React from 'react';
import stu1 from "../Assets/stu4.jpg";
import coa from"../Assets/COA.png"
import coa2 from "../Assets/COA10.png"

export default function LecHome() {
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
        <h1 className='text-yellow-400 pl-10   font-semibold'>STUDENT AND STAFF PORTAL</h1><sm className="text-white pb-10"></sm>
        <div className="flex gap-10 justify-center items-center  pb-10">
          <div>
            <label className="inline-flex items-center" htmlFor="indigoCheckBox">
              <input id="indigoCheckBox" type="checkbox" className="w-6 h-6 rounded-full border-2 border-indigo-700 focus:ring-indigo-400" 
              />
              <a href="/" class="text-white ml-2">Student</a>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center" htmlFor="lecturerCheckBox">
              <input id="lecturerCheckBox" type="checkbox" className="w-6 h-6 rounded-full border-2 border-indigo-700 focus:ring-indigo-400" />
              <a href="/lechome" class="text-white ml-2">Lecturer</a>
            </label>
          </div>
        </div>
        <div class="flex flex-wrap items-start justify-end -mb-3">
          <a href='/leclogin' class="inline-flex px-5 py-3 font-semibold text-purple-700 bg-white hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3"> 
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Login
          </a>
          <a href='/lecsignup' class="inline-flex px-5 py-3 font-semibold text-white bg-purple-800 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          Register
          </a>
        </div>
      </div>
    </div>
  );
}

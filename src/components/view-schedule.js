import React from 'react'
import StudentAside from './student-aside'

export default function ViewSchedule() {
  return (
    <div>
    <section class="flex bg-gray-100 min-h-screen">
<StudentAside/>
<div class="flex-grow text-gray-800">
  <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
    <button class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
      <span class="sr-only">Menu</span>
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>
    <div class="relative w-full max-w-md sm:-ml-2">
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
      <input type="text" role="search" placeholder="Search..." class="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
    </div>
    <div class="flex flex-shrink-0 items-center ml-auto">
      <button class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
        <span class="sr-only">User Menu</span>
        <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
          <span class="font-semibold">Ama Jones</span>
          <span class="text-sm text-gray-600">Student</span>
        </div>
        <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
          <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="user profile photo" class="h-full w-full object-cover"/>
        </span>
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="hidden sm:block h-6 w-6 text-gray-300">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg> 
      </button>
      <div class="border-l pl-3 ml-3 space-x-1">
        <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <span class="sr-only">Notifications</span>
          <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
          <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <span class="sr-only">Log out</span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
        </button>
      </div>
    </div>
  </header>
  <main class="p-6 sm:p-10 space-y-6">
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div class="mr-6">
        <h1 class="text-4xl font-semibold mb-2">Student Portal</h1>
        <h2 class="text-gray-600 ml-0.5">Welcome to Your portal</h2>
      </div>
      <div class="flex flex-wrap items-start justify-end -mb-3">
        <a href='/addmessage' class="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Make An Enquiry
        </a>
      
      </div>
    </div>
    <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <div>
          <span class="block text-2xl font-bold">7</span>
          <span class="block text-gray-500">Courses</span>
        </div>
      </div>
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <span class="block text-2xl font-bold">3.8</span>
          <span class="block text-gray-500"> cummlative GPA</span>
        </div>
      </div>
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>
        </div>
        <div>
          <span class="inline-block text-2xl font-bold">POLI 441</span>
          <span class="block text-gray-500">Underperforming Course</span>
        </div>
      </div>
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
        <span class="block text-2xl font-bold">INFS 442</span>
            <span class="block text-gray-500">Wellperforming Course</span>
        </div>
      </div>
    </section>
    <section class="grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col gap-6">
      <div class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
        <div>
          <div>
            <div class="text-center p-10">
     <h1 class="font-semibold text-4xl mb-4">Course Schedule</h1>
    
 </div>
 <div class="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
    <a href="#"
        class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
        Computer Science Engineering

        <div class="text-gray-500  text-sm pt-1">
            <span>Day: 63</span>
            <span>Time: 20697</span>
        </div>
    </a>
    <a class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
        href="#">
        Mechanical Engineering
        <div class="text-gray-500 font-thin text-sm">
            <span>Day: 48</span>
            <span>Time: 18222</span>
        </div>
    </a>
    <a class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
        href="#">
        Civil Engineering
        <div class="text-gray-500 font-thin text-sm">
            <span>Day: 55</span>
            <span>Time: 14783</span>
        </div>
    </a>
    <a class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
        href="#">
        Information Technology Engineering
        <div class="text-gray-500 font-thin text-sm">
            <span>Day: 26</span>
            <span>Time: 8818</span>
        </div>
    </a>
    <a class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
        href="#">
        Electrical Engineering
        <div class="text-gray-500 font-thin text-sm">
            <span>Day: 40</span>
            <span>Time: 9584</span>
        </div>
    </a>
    <a class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
        href="#">
        Electronics and Communication Engineering
        <div class="text-gray-500 font-thin text-sm">
            <span>Day: 8</span>
            <span>Time: 2576</span>
        </div>
    </a>
    <a class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
        href="#">
        Electronics and Telecommunication Engineering
        <div class="text-gray-500 font-thin text-sm">
            <span>Day: 5</span>
            <span>Time: 1739</span>
        </div>
    </a>
    <a class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
        href="#">
        Biomedical Engineering
        <div class="text-gray-500 font-thin text-sm">
            <span>Day: 1</span>
            <span>Time: 217</span>
        </div>
    </a>
    <a class="bg-gray-100 flex-grow text-black border-l-8 border-purple-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
        href="#">
        Manufacturing Engineering
        <div class="text-gray-500 font-thin text-sm">
            <span>Day: 1</span>
            <span>Time: 154</span>
        </div>
    </a>
</div>
     </div>
        
         
        
     </div>
      </div>
      
    
      <div class="row-span-3 bg-white shadow rounded-lg">
        <div class="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
          <span>Course Instructors</span>
          
          
        </div>
        <div class="overflow-y-auto" >
            <ul class="p-6 space-y-6">
              <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture"/>
                </div>
                <span class="text-gray-600">Annette Watson</span>
                <sm class="ml-8 font-semibold"> POLI 441</sm>
              </li>
              <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture"/>
                </div>
                <span class="text-gray-600">Calvin Steward</span>
                <span class="ml-auto font-semibold">POLI 422</span>
              </li>
              <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture"/>
                </div>
                <span class="text-gray-600">Ralph Richards</span>
                <span class="ml-auto font-semibold">INFS 442</span>
              </li>
              <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture"/>
                </div>
                <span class="text-gray-600">Bernard Murphy</span>
                <span class="ml-auto font-semibold">PHY 453</span>
              </li>
              <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture"/>
                </div>
                <span class="text-gray-600">Arlene Robertson</span>
                <span class="ml-auto font-semibold">ENG 849</span>
              </li>
              <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture"/>
                </div>
                <span class="text-gray-600">Jane Lane</span>
                <span class="ml-auto font-semibold">SOC 630</span>
              </li>
              <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture"/>
                </div>
                <span class="text-gray-600">Pat Mckinney</span>
                <span class="ml-auto font-semibold">POLI 443</span>
              </li>
              <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture"/>
                </div>
                <span class="text-gray-600">Norman Walters</span>
                <span class="ml-auto font-semibold">POLI 039</span>
              </li>
            </ul>
          </div>
      </div>
      
    </section>
   
  </main>
</div>
</section>
  </div>
  )
}


import Aside from './aside'
import React, { useState } from 'react';
import axios from 'axios';
import Avatar from 'react-avatar';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function AssignForm() {

  const [formData, setFormData] = useState({
    tittle: '',
    Description: '',
    
  });

  const [userInfo] = useState(JSON.parse(sessionStorage.getItem('USER_INFO')))

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleLogout = () => {
    // Clear user session information
    sessionStorage.removeItem('USER_INFO');
    // Redirect the user to the sign-in page
    window.location.href = '/';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const userInfo = JSON.parse(sessionStorage.getItem('USER_INFO'));

      const formDataToSubmit = new FormData();
      formDataToSubmit.append('title', formData.title);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('createdBy', userInfo._id);

      const response = await axios.post('http://localhost:9000/assign', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        console.log('Promotion added successfully');
        setSuccessMessage('Promotion added successfully.');
        setFormData({
          title: '',
          description: '',
        });
        setErrorMessage('');

        // Clear success message after 2 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);

        // Refresh form after submission
        e.target.reset();
      }
    } catch (error) {
      console.error('Error adding promotion:', error);
      setErrorMessage('Failed to add promotion. Please try again.');
      setSuccessMessage('');

      // Clear error message after 2 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };



  return (
    <div>
    <section className="flex bg-gray-100 min-h-screen">
<Aside/>
<div className="flex-grow text-gray-800 ">
  <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
    <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
      <span className="sr-only">Menu</span>
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>
    <div className="relative w-full max-w-md sm:-ml-2">
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
      <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
    </div>
    <div className="flex flex-shrink-0 items-center ml-auto">
      <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
        <span className="sr-only">User Menu</span>
        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
          {/* <span className="font-semibold">{userInfo.firstName}</span> */}
          <span className="text-sm text-gray-600">Lecturer</span>
        </div>
        <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                    {/* <Avatar name={`${userInfo.firstName} ${userInfo.lastName}`} size="50" /> */}
                  </span>
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg> 
      </button>
      <div className="border-l pl-3 ml-3 space-x-1">
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <span className="sr-only">Notifications</span>
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <span className="sr-only">Log out</span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
           onClick={handleLogout}
          className="h-6 w-6">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
        </button>
      </div>
    </div>
  </header>
  <main className="p-6 sm:p-10 space-y-6">
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div className="mr-6">
        <h1 className="text-4xl font-semibold mb-2">Lecture Portal</h1>
        <h2 className="text-gray-600 ml-0.5">Welcome 
        to your dashboard </h2> 
        {/* <span className="text-sm text-gray-600">{userInfo.firstName} </span> */}
      </div>
      <div className="flex flex-wrap items-start justify-end -mb-3">
        <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Manage Assignments
        </button>
        <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create An Annoucement
        </button>
      </div>
    </div>
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <span className="block text-2xl font-bold">62</span>
          <span className="block text-gray-500">Students</span>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <span className="block text-2xl font-bold">6.8</span>
          <span className="block text-gray-500">Average mark</span>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>
        </div>
        <div>
          <span className="inline-block text-2xl font-bold">48%</span>
          <span className="inline-block text-xl text-gray-500 font-semibold"></span>
          <span className="block text-gray-500">Underperforming students</span>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <span className="block text-2xl font-bold">83%</span>
          <span className="block text-gray-500">well-performing Students</span>
        </div>
      </div>
    </section>
    <section className="grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col gap-6">
      <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
       <div>
            <div>
       
                <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
                <div className="text-center p-10">
             <h1 className="font-semibold text-4xl ">Assignment </h1>
             <h1 className="text-3xl"></h1>
           
         </div>
         <form onSubmit={handleSubmit}>
             <p className="mb-5 leading-relaxed text-gray-600">Assign Assignment to all Students
             </p>
             <div className="mb-4">
                 <label for="text" className="text-sm leading-7 text-gray-600">Title</label>
                 <input type="text" id="text" name="text"
                 value={formData.tittle} onChange={handleChange}  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
             </div>
             <div className="mb-4">
                 <label for="message" className="text-sm leading-7 text-gray-600">Assignment Description</label>
                 <textarea id="message" name="message" value={formData.Description} onChange={handleChange}
                 className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
             </div>
             <div className="flex items-center justify-center">
            
             <div className="mx-auto w-full max-w-[550px] bg-white">
                 <form className="py-4 px-9">
         
                     <div className="mb-6 pt-4">
                         <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                             Upload Assignment
                         </label>
         
                         <div className="mb-8">
                             <input type="file" name="file" id="file" className="sr-only" />
                             <label for="file"
                                 className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                 <div>
                                     <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                         Drop files here
                                     </span>
                                     <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                         Or
                                     </span>
                                     <span
                                         className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                         Browse
                                     </span>
                                 </div>
                             </label>
                         </div>
         
                         <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                             <div className="flex items-center justify-between">
                                 <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                     banner-design.png
                                 </span>
                                 <button className="text-[#07074D]">
                                     <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                         <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                             fill="currentColor" />
                                         <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                             fill="currentColor" />
                                     </svg>
                                 </button>
                             </div>
                         </div>
         
                        
                     </div>
         
                     <div>
                         <button
                             className="hover:shadow-form w-full rounded-md bg-purple-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                             Send Assignments
                         </button>
                     </div>
                     <div className="flex items-center justify-center mt-2">
              {successMessage && (
                <div className="flex items-center mr-4">
                  <FaCheckCircle className="text-green-600 mr-2" /> {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="flex items-center">
                  <FaExclamationCircle className="text-red-600 mr-2" /> {errorMessage}
                </div>
              )}
            </div>
                 </form>
             </div>
           
         </div>
         </form>
            
         </div>
             
             </div>
            
          </div>  
           
      </div>
     
     
      <div className="row-span-3 bg-white shadow rounded-lg">
        <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
          <span>Registered Students</span>
          <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
            ID NO
            <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          
        </div>
        <div className="overflow-y-auto" >
            <ul className="p-6 space-y-6">
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture"/>
                </div>
                <span className="text-gray-600">Annette Watson</span>
                <span className="ml-auto font-semibold">4678</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture"/>
                </div>
                <span className="text-gray-600">Calvin Steward</span>
                <span className="ml-auto font-semibold">7458</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture"/>
                </div>
                <span className="text-gray-600">Ralph Richards</span>
                <span className="ml-auto font-semibold">2384</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture"/>
                </div>
                <span className="text-gray-600">Bernard Murphy</span>
                <span className="ml-auto font-semibold">3453</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture"/>
                </div>
                <span className="text-gray-600">Arlene Robertson</span>
                <span className="ml-auto font-semibold">2849</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture"/>
                </div>
                <span className="text-gray-600">Jane Lane</span>
                <span className="ml-auto font-semibold">3830</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture"/>
                </div>
                <span className="text-gray-600">Pat Mckinney</span>
                <span className="ml-auto font-semibold">3043</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture"/>
                </div>
                <span className="text-gray-600">Norman Walters</span>
                <span className="ml-auto font-semibold">3039</span>
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

import React from 'react'
import coa from"../Assets/COA10.png"
export default function Aside() {
  return (
    <div className='flex bg-gray-100 min-h-screen'>
       <aside class="hidden sm:flex  w-42 sm:flex-col rounded-sm">
    
    <div class="flex-grow flex flex-col justify-between text-gray-500 bg-purple-700">
      
       
    
      <nav class="flex flex-col mx-4 my-6 space-y-4">
      
      <img src={coa} class="h-32 w-52 rounded-lg" ></img>
      
       <div className='flex'> 
        <a href="/adddisc" class=" items-center justify-center inline-flex py-3  hover:text-gray-400 py-3 font-semibold text-white focus:text-gray-400">
         
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <span className='text-white pl-2 font-semibold hover:text-gray-400 focus:text-gray-400'>Records</span>
        </a>
       
        </div>
        <div className='flex' >
        <a href='/lecdash' class=" items-center inline-flex py-3 justify-center   text-white  font-semibold  hover:text-gray-400 focus:text-gray-400 rounded-lg">
        
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span   className='text-white pl-2   hover:text-gray-400 font-semibold focus:text-gray-400'>Dashboard</span>
        </a>
       
        </div>
        <div className='flex'>
        <a href="/addannouce" class="inline-flex items-center font-semibold justify-center text-white  pr-3 hover:text-gray-400 focus:text-gray-400 rounded-lg">
          
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className='text-white pl-2 font-semibold  hover:text-gray-400 focus:text-gray-400'>Annoucement</span>
        </a>

        </div>
        <div>
        <a href="addassign" class="inline-flex items-center justify-center py-3 text-white  font-semibold  hover:text-gray-400 focus:text-gray-400 ">
          
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' />
          </svg>
          <span class='text-white pl-2 font-semibold  hover:text-gray-400 focus:text-gray-400'>Assignment</span>
        </a>
        </div>
        <div className='flex'>
        <a href="/schedule" class="inline-flex items-center justify-center py-3 hover:text-gray-400 text-white  focus:text-gray-400">
          
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class='text-white pl-2 font-semibold  hover:text-gray-400 focus:text-gray-400'>Schedule</span>
        </a>
        </div>
        <div className='flex'>
        <a href="/addgrade" class="inline-flex items-center justify-center py-3 hover:text-gray-400 text-white rounded-lg">
          
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span class="text-white pl-2 font-semibold  hover:text-gray-400 focus:text-gray-400">Grade</span>
        </a>
        </div>
      </nav>
      <div class="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
        <button class="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
          <span class="sr-only">Settings</span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  </aside>
    </div>
  )
}

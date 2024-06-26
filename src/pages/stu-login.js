
import img1 from "../Assets/bg.png"
import { Link } from "react-router-dom";
export default function StudentLogin() {
    return (
        <div class="font-[sans-serif]   text-white md:h-screen">
      <div class="grid md:grid-cols-2 items-center  h-full">
        
        <div class="flex items-center md:p-8 p-6   h-full lg:w-11/12 lg:ml-auto">
          <form class="max-w-lg  pt-10 w-full mx-auto">
            <div class="mb-12">
              <h3 class="text-3xl font-bold text-black">Student Login</h3>
            </div>
           
             
            <div class="mt-10">
              <label class="text-xs block text-black mb-2">Email</label>
              <div class="relative flex items-center">
                <input name="email" type="text" required class="w-full bg-transparent text-sm border-b  text-black border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter email" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div class="mt-10">
              <label class="text-xs block  text-black mb-2">Password</label>
              <div class="relative flex items-center">
                <input name="password" type="password" required class="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center mt-8">
              <label for="remember-me" class="text-xs block mb-2">
                <a href="javascript:void(0);" class="text-gray-500 font-semibold hover:underline ml-1">Forgot Password?</a>
              </label>
            </div>
            <div class="mt-12">
          <Link to="/studash"> <button
                                class="w-full px-4 py-2 font-bold text-white bg-[#9563E1] hover:bg-purple-700 rounded-md dark:text-white  focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Login
                            </button></Link> 
          <div className="flex mt-8"><p class="text-sm  text-black pl-4 mt-8">Don't have an account?</p> <a href='/stusignup' class="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3 ml-2  mt-4">
           
          Register
          </a></div>    
            </div>
          </form>
        </div>
        <div class="max-md:order-1  bg-[#9563E1]  lg:w-12/12  w-full h-full  ">
     
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		
	
            <h3 className=" pt-7 text-4xl font-bold text-center text-white-800 block ">Welcome to </h3>
            <h3 className="  text-4xl  text-center text-white-800 ">Student Portal</h3>
          <img src={img1} class="pl-10 pt-10" alt="" />
        </div>
      </div>
    </div>
    );
}

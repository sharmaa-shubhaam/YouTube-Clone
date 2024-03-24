import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import YouTube from "../assets/YouTube.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { HiMiniMicrophone } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/Profile.jpg";

export default function Header(): React.JSX.Element {
   const [isInputClicked, setIsInputClicked] = useState(false);

   return (
      <header className="z-50 pl-4 pr-7 py-0 bg-white sticky top-0" onClick={() => setIsInputClicked(false)}>
         <div className="h-14 flex items-center justify-between space-x-10">
            <div className="flex items-center space-x-3">
               <button className="p-2 rounded-full hover:bg-gray-100 cursor-default">
                  <RxHamburgerMenu className="text-2xl cursor-pointer" />
               </button>
               <Link to="/">
                  <figure className="w-24 overflow-hidden">
                     <img src={YouTube} alt="YouTube" className="w-full" />
                  </figure>
               </Link>
            </div>
            <div className="hidden sm:flex items-center justify-center flex-1 space-x-4">
               <div className="flex items-center w-[65%] max-w-5xl bg-white border rounded-full overflow-hidden">
                  {isInputClicked && <IoSearchOutline className="text-2xl ml-3" />}
                  <input
                     type="text"
                     className="bg-transparent w-full outline-none border-none py-1 px-4 roboto-regular"
                     placeholder="Search"
                     onClick={(e) => {
                        e.stopPropagation();
                        setIsInputClicked(true);
                     }}
                  />
                  <button className="w-20 bg-gray-100 py-[7px] flex items-center justify-center">
                     <IoSearchOutline className="text-2xl" />
                  </button>
               </div>
               <button className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200">
                  <HiMiniMicrophone className="text-xl" />
               </button>
            </div>
            <div className="flex items-center sm:space-x-2.5">
               <button className="flex sm:hidden p-2 rounded-full hover:bg-gray-100">
                  <IoSearchOutline className="text-2xl" />
               </button>
               <button className="flex sm:hidden p-2.5 rounded-full hover:bg-gray-100">
                  <HiMiniMicrophone className="text-xl" />
               </button>
               <button className="p-2 rounded-full hover:bg-gray-100">
                  <MdOutlineVideoCall className="text-2xl" />
               </button>
               <button className="p-2 rounded-full hover:bg-gray-100 relative">
                  <IoNotificationsOutline className="text-2xl" />
                  <span className="text-white bg-red-600 text-[10.7px] absolute top-1 -right-1 px-1 rounded-full border-2 border-white flex items-center justify-center">
                     9&#43;
                  </span>
               </button>
               <figure className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer overflow-hidden !ml-4">
                  <img src={ProfilePic} alt="Account-User" className="w-full h-full object-cover" />
               </figure>
            </div>
         </div>
      </header>
   );
}

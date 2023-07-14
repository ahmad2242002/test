import React, { Component } from 'react'
import Image from 'next/image'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../images/logo.webp'
import CustomCalender from './calender.js'
import {
    faMagnifyingGlass,
    faGlobe,
    faBars,
    faUser,
    faUserGroup,
  } from "@fortawesome/free-solid-svg-icons";
import { document } from 'postcss';

  const Header = ()=>{ {
    const [showcalendar, setShowCalendar] = useState("");
    return (
         <div className="max-w-full justify-center items-center sticky top-0 z-20 grid grid-cols-3 bg-white p-4 drop-shadow-lg">
            <div className="justify-center relative items-center mx-5 my-auto h-10 w-32">
            <Image src = {logo} layout='fit' fill alt='Logo of Airbnb' quality={100}></Image>
             </div>
             <div className="h-14 flex relative items-center rounded-full bg-white hover:drop-shadow-lg border-2 border-gray-200 ms-8 px-2  md:visible invisible">
                 <input type="text" placeholder="Start your search" onChange={(e)=>{setShowCalendar(e.target.value)}} className="visible w-24 md:w-fit flex-grow text-gray-500 focus:outline-none ms-3"  />
                 <div className=" relative bg-red-400 rounded-full lg:visible invisible">
                 <FontAwesomeIcon className="text-lg px-2.5 py-2 h-8 text-white" icon={faMagnifyingGlass} />
                 </div>
             </div>
             <div className="flex justify-end items-center mx-1">
                 <div className="md:visible invisible flex items-center rounded-full hover:bg-gray-200 hover:cursor-pointer py-3 px-3 mx-2">
                     Become a Host
                 </div>
          
                 <div className="flex items-center rounded-full hover:bg-gray-200 hover:cursor-pointer py-2 px-3 mx-3">
                 <FontAwesomeIcon  icon={faGlobe} className=" text-lg text-gray-700"/>
                 </div>
                 <div
                     className="flex items-center rounded-full bg-white hover:drop-shadow-lg hover:cursor-pointer border-2 border-gray-200">
                     <FontAwesomeIcon  icon={faBars} className="my-2 mx-3 text-lg text-gray-700"/>
                     <FontAwesomeIcon  icon={faUser} className="my-2 mx-3 text-lg text-gray-700"/>
                 </div>
             </div>
             {showcalendar != "" ? 
                <div className='mx-auto col-span-3'>
                    <CustomCalender></CustomCalender>
                    <div className="grid grid-cols-2 mt-4 mx-2 pb-1 border-b-2">
                    <div className="text-2xl font-semibold justify-items-start">Number of Guests</div>
                    <div className="flex items-center justify-end">
                    <FontAwesomeIcon icon= {faUserGroup} className="mx-2" /> 
                    <input className="w-10 h-8 border-none focus:outline-0 text-red-500 text-lg placeholder-red-500" placeholder='1' min={1} max={999} type="number"></input>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 mt-4 mx-2 pb-1"> 
                    <button className=" text-gray-500" onClick = {()=>{setShowCalendar("")}}>Cancel</button>
                    <button className=" text-red-500">Search</button>
                  </div></div>
                :""}
          </div>
    )
  }
}

export default Header;
import React, { Component } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faGlobe,
    faBars,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  render() {
    return (
         <div className="max-w-full sticky top-0 z-20 grid grid-cols-3 bg-white p-4 drop-shadow-lg">
       <div className=" justify-center items-center mx-5 my-auto logo bg-cover h-10 w-32">
          
        </div>
        <div className="flex items-center rounded-full bg-white hover:drop-shadow-lg border-2 border-gray-200 m-1 p-2">
            <input type="text" placeholder="Start your search" className="flex-grow text-gray-500 focus:outline-none ms-3"  />
            <div className="bg-red-400 rounded-full md:visible invisible">
            <FontAwesomeIcon className="text-lg px-2.5 py-2 h-8 text-white" icon={faMagnifyingGlass} />
            </div>
        </div>
        <div className="flex justify-end items-center mx-1 p-2">
            <div className="md:visible invisible flex items-center rounded-full hover:bg-gray-200 hover:cursor-pointer py-3 px-3 mx-2">
                Become a Host
            </div>

            <div className="flex items-center rounded-full hover:bg-gray-200 hover:cursor-pointer py-2 px-3 mx-3">
            <FontAwesomeIcon  icon={faGlobe} className="sm:visible invisible text-lg text-gray-700"/>
            </div>

            <div
                className="flex items-center rounded-full bg-white hover:drop-shadow-lg hover:cursor-pointer border-2 border-gray-200">
                <FontAwesomeIcon  icon={faBars} className="my-2 mx-3 text-lg text-gray-700"/>
                <FontAwesomeIcon  icon={faUser} className="my-2 mx-3 text-lg text-gray-700"/>
            </div>
        </div>
    </div>
    )
  }
}

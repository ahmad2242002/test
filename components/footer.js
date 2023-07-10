import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className = " mt-36 px-32 py-14 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className = " flex flex-col space-y-4 my-3">
                <li className = " text-xs font-bold list-none">ABOUT</li>
                <li className = "text-xs font-normal list-none">How Airbnb works</li>
                <li className = "text-xs font-normal list-none">Newsroom</li>
                <li className = "text-xs font-normal list-none">Investors</li>
                <li className = "text-xs font-normal list-none">Airbnb Plus</li>
                <li className = "text-xs font-normal list-none">Airbnb Luxe</li>
            </div>
            <div className = " flex flex-col space-y-4 my-3">
                <li className = " text-xs font-bold list-none">COMMUNITY</li>
                <li className = "text-xs font-normal list-none">Accessibility</li>
                <li className = "text-xs font-normal list-none">This is not a real site</li>
                <li className = "text-xs font-normal list-none">Its a pretty awesome clone</li>
                <li className = "text-xs font-normal list-none">Referals accepted</li>
                <li className = "text-xs font-normal list-none">Papafam</li>
            </div>
            <div className = " flex flex-col space-y-4 my-3">
                <li className = " text-xs font-bold list-none">HOST</li>
                <li className = "text-xs font-normal list-none">Papa React</li>
                <li className = "text-xs font-normal list-none">Presents</li>
                <li className = "text-xs font-normal list-none">Zero to Full Stack Hero</li>
                <li className = "text-xs font-normal list-none">Hundreds of Students</li>
                <li className = "text-xs font-normal list-none">Join New</li>
            </div>
            <div className = " flex flex-col space-y-4 my-3">
                <li className = " text-xs font-bold list-none">SUPPORT</li>
                <li className = "text-xs font-normal list-none">Help Centre</li>
                <li className = "text-xs font-normal list-none">Trust & Safety</li>
                <li className = "text-xs font-normal list-none">Say Hi Youtube</li>
                <li className = "text-xs font-normal list-none">Easter Eggs</li>
                <li className = "text-xs font-normal list-none">For the Win</li>
            </div>
        </div>
    </footer>
    )
  }
}

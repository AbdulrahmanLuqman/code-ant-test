// import { Routes, Route } from "react-router-dom"
import Sidenavs from "../components/Sidenavs"
// import Logo from "../assets/logo.png"
import { Logo } from "../components/Icons"

import Repository from "./Repository"
import { Hamburger, Close } from "../components/Icons"
import { useState } from "react"

const Dashboard = () => {
  const [isNavOut, setIsNavOut] = useState(false)
  return (
    <div className="md:flex md:gap-4">
      <header className="md:hidden z-10 w-full h-[64px] flex justify-between items-center fixed top-0 border bg-white p-4">
        {/* <img src={Logo} alt="Logo" /> */}
        <div className="md:block hidden"><Logo/></div>
        <div onClick={()=> setIsNavOut(!isNavOut)} className="w-fit cursor-pointer">
          <span className={isNavOut ? "hidden" :"block"}> <Hamburger /></span>
          <span className={isNavOut ? "block" : "hidden"}><Close /></span>          
        </div>
      </header>
        <Sidenavs isNavOut={isNavOut} />

        <div className="md:px-3 py-6 w-full md:m-0 mt-10">
          <Repository />
        </div>

        <div onClick={()=> setIsNavOut(false)} className={isNavOut ? "bg-black opacity-30 fixed top-0 left-0 w-full h-full" : "hidden"}></div>
    </div>
  )
}

export default Dashboard
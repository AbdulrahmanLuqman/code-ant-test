// import { useState } from "react"
// import Logo from "../assets/logo.png"
import { Logo, ArrowDown, Book, Cloud, Code, Home, LogOut, Settings, Support } from "./Icons"

import { Link, useLocation } from "react-router-dom"

const Sidenavs = ({isNavOut}) => {
    const LOCATION = useLocation()
    const USER = "UtkarshDhairyaPanwar"
    const NAVS = [
        {
            icon: <Home />,
            name: "Repositories",
            pathname: "/"
        },
        {
            icon: <Code />,
            name: "AI Code Review",
            pathname: null
        },
        {
            icon: <Cloud />,
            name: "Cloud Security",
            pathname: null
        },
        {
            icon: <Book />,
            name: "How to Use",
            pathname: null
        },
        {
            icon: <Settings />,
            name: "Settings",
            pathname: null
        },
        {
            icon: <Support />,
            name: "Support",
            pathname: null
        },
        {
            icon: <LogOut />,
            name: "Logout",
            pathname: "/login"
        }
    ]
  return (
    <aside className={`bg-white md:w-[242px] md:h-screen md:border border-x border-b flex flex-col gap-5 items-center px-5 py-6 md:sticky fixed transition-all duration-500 md:left-0 md:top-0 top-[62px] z-10 ${isNavOut ? "w-full left-0" : "left-[-900px]"}`}>
        <div className="space-y-5 w-full">
            {/* <img src={Logo} alt="Logo"  /> */}
            <div className="md:block hidden"><Logo/></div>
            <div className="w-full border border-[#D5D7DA] rounded-md py-1 px-[10px] shadow-[#0A0D120D] flex md:gap-2 justify-between items-center cursor-pointer">
                {USER}
                <ArrowDown />
            </div>
        </div>

        <nav className="w-full h-full flex flex-col md:justify-between">
            <ul className="flex flex-col gap-2">
                {
                    NAVS.slice(0, 5).map(nav => <Link key={nav.name} to={nav.pathname}><li className={`w-fit md:w-full flex gap-3 items-center py-[10px] px-[14px] rounded-md cursor-pointer hover:bg-[whitesmoke] ${LOCATION.pathname === nav.pathname ? "md:bg-[#1570EF] md:text-white" : "text-[#414651]"}`}>
                        <span>{nav.icon}</span>
                        <span className="font-semibold">{nav.name}</span>
                    </li></Link>)
                }
            </ul>

            <ul className="flex flex-col gap-2">
                {
                    NAVS.slice(5, NAVS.length).map(nav => <Link key={nav.name} to={nav.pathname}><li className={`w-fit md:w-full flex gap-3 items-center py-[10px] px-[14px] rounded-md cursor-pointer hover:bg-[whitesmoke] ${LOCATION.pathname === nav.pathname ? "bg-[#1570EF] text-white" : "text-[#414651]"}`}>
                        <span>{nav.icon}</span>
                        <span className="font-semibold">{nav.name}</span>
                    </li></Link>)
                }
            </ul>
        </nav>
    </aside>
  )
}

export default Sidenavs
"use client";

import { selectOpenWindow, selectWindows, useWindowStore } from "@/store/windowStore";
import { FaBars } from "react-icons/fa6";

function NavLinks() {
    const openWindow = useWindowStore(selectOpenWindow);
    return (
        <div className="flex items-center">
            {/* Mobile Links */}
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
                    <FaBars className="text-lg" />
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1c1c1c] rounded-box w-52 space-y-2">
                    <li className="px-2 text-rose-500 font-bold font-mono">KarimOS</li>
                    <li className="px-2" onClick={() => openWindow("About Me")}>About Me</li>
                    <li className="px-2" onClick={() => openWindow("Tech Stack")}>Tech Stack</li>
                    <li className="px-2" onClick={() => openWindow("Projects")}>Projects</li>
                    <li className="px-2" onClick={() => openWindow("Resume")}>Resume</li>
                </ul>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-4 ml-4">
                <span className="text-rose-500 font-bold font-mono">KarimOS</span>
                <span className="cursor-pointer hover:text-rose-400 transition-colors duration-200" onClick={() => openWindow("About Me")}>About Me</span>
                <span className="cursor-pointer hover:text-rose-400 transition-colors duration-200" onClick={() => openWindow("Tech Stack")}>Tech Stack</span>
                <span className="cursor-pointer hover:text-rose-400 transition-colors duration-200" onClick={() => openWindow("Projects")}>Projects</span>
                <span className="cursor-pointer hover:text-rose-400 transition-colors duration-200" onClick={() => openWindow("Resume")}>Resume</span>
            </div>
        </div>
    );
}

export default NavLinks;
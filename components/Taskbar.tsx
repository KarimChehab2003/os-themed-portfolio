"use client";

import { FaBars, FaBatteryFull, FaVolumeHigh, FaVolumeXmark, FaWifi } from "react-icons/fa6";
import Clock from "./Clock";
import { selectEnabled, selectToggleSound, useSoundStore } from "@/store/soundStore";

function Taskbar() {
    const soundEnabled = useSoundStore(selectEnabled);
    const toggleSound = useSoundStore(selectToggleSound);
    return (
        <header className="navbar bg-[#1c1c1c] text-gray-2 min-h-10 py-2 px-4 text-sm ">
            {/* Start */}
            <div className="navbar-start gap-2">
                {/* Hamburger (small screens only) */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
                        <FaBars className="text-lg" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1c1c1c] rounded-box w-52">
                        <li><a>Projects</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>

                <span className="text-rose-500 font-bold font-mono hidden lg:block">KarimOS</span>

                {/* Links (hidden on small screens) */}
                <div className="hidden lg:flex gap-4 ml-4">
                    <span className="text-rose-500 font-bold font-mono lg:hidden">KarimOS</span>
                    <span className="cursor-pointer hover:text-rose-400 transition-colors duration-200">Projects</span>
                    <span className="cursor-pointer hover:text-rose-400 transition-colors duration-200">About</span>
                </div>
            </div>

            {/* Center */}
            <div className="navbar-center">
                <Clock />
            </div>

            {/* End */}
            <div className="navbar-end flex justify-end items-center gap-2">
                <FaWifi className="text-lg" />
                {soundEnabled ? (<FaVolumeHigh className="text-lg cursor-pointer" onClick={toggleSound} />) : (<FaVolumeXmark className="text-lg cursor-pointer" onClick={toggleSound} />)}
                <FaBatteryFull className="text-lg" />
            </div>
        </header>
    );
}

export default Taskbar;
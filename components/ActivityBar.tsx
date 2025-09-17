import { FaBars } from "react-icons/fa6";
import Clock from "./Clock";
import SystemTray from "./SystemTray";

function Taskbar() {

    return (
        <header className="navbar justify-between bg-[#1c1c1c] text-gray-2 min-h-10 py-2 px-4 text-sm">
            {/* Start */}
            <div className="flex items-center">
                {/* Mobile Links */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
                        <FaBars className="text-lg" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1c1c1c] rounded-box w-52">
                        <li><a className="text-rose-500 font-bold font-mono">KarimOS</a></li>
                        <li><a>Projects</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-4 ml-4">
                    <span className="text-rose-500 font-bold font-mono">KarimOS</span>
                    <span className="cursor-pointer hover:text-rose-400 transition-colors duration-200">Projects</span>
                    <span className="cursor-pointer hover:text-rose-400 transition-colors duration-200">About</span>
                </div>
            </div>

            {/* Center */}
            <div className="text-center">
                <Clock />
            </div>

            {/* End */}
            <div >
                <SystemTray />
            </div>
        </header>
    );
}

export default Taskbar;
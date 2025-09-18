import Clock from "./Clock";
import SystemTray from "./SystemTray";
import NavLinks from "./NavLinks";

function Taskbar() {

    return (
        <header className="navbar justify-between bg-[#1c1c1c] text-gray-2 min-h-10 py-2 px-4 text-sm relative z-40">
            {/* Start */}
            <NavLinks />

            {/* Center */}
            <div className="text-center sm:absolute w-full h-full flex justify-center items-center -z-1">
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
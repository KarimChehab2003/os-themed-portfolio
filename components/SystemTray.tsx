"use client";

import { selectEnabled, selectToggleSound, useSoundStore } from "@/store/soundStore";
import { FaBatteryFull, FaWifi } from "react-icons/fa";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

function SystemTray() {
    const soundEnabled = useSoundStore(selectEnabled);
    const toggleSound = useSoundStore(selectToggleSound);
    return (
        <div className="navbar-end flex justify-end items-center gap-2">
            <FaWifi className="text-lg" />
            {soundEnabled ? (<FaVolumeHigh className="text-lg cursor-pointer hover:text-rose-500 transition-colors duration-200" onClick={toggleSound} />) : (<FaVolumeXmark className="text-lg cursor-pointer hover:text-rose-500 transition-colors duration-200" onClick={toggleSound} />)}
            <FaBatteryFull className="text-lg" />
        </div>
    );
}

export default SystemTray;
"use client";

import { dockLinks } from "@/lib/constants";
import { motion } from "framer-motion";

function BottomDock() {
    return (
        <footer className="absolute w-full bottom-6 flex justify-center items-center px-2 z-40">
            <div className="flex items-center bg-[#1c1c1c] px-2 sm:px-4 py-2 rounded-full">
                <ul className="flex items-center space-x-2 sm:space-x-4 text-xl sm:text-4xl">
                    {
                        dockLinks.map((link) => (
                            <motion.li
                                whileHover={{ scale: 1.1, y: -5 }}
                                key={link.href}
                                data-tip={link.tooltip}
                                className={`tooltip tooltip-primary ${link.color} p-1 rounded-md`}
                            >
                                <a href={link.href} target="_blank">
                                    <link.icon />
                                </a>
                            </motion.li>
                        ))
                    }
                </ul>
                <div className="divider divider-horizontal mx-1 sm:mx-2"></div>
                <a href="/KarimChehab.pdf" download={"KarimChehab.pdf"} className="btn btn-sm sm:btn-md btn-primary rounded-full">Download Resume</a>
                <div></div>
            </div>
        </footer>
    );
}

export default BottomDock;
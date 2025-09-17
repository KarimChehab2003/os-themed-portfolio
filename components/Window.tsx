"use client";

import { selectCloseWindow, selectWindows, useWindowStore } from "@/store/windowStore";
import { useState } from "react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";

function Window({ children, title }: { children: React.ReactNode, title: string }) {
    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const windows = useWindowStore(selectWindows);
    const closeWindow = useWindowStore(selectCloseWindow);
    const isOpen = windows.includes(title);

    if (!isOpen) return null;

    console.log("Maximized:", isMaximized)

    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: 320,
                height: 250,
            }}
            bounds="window"
            minWidth={320}
            minHeight={250}
            dragHandleClassName="window-header"
            size={isMaximized ? { width: "100%", height: "100%" } : undefined}
            position={isMaximized ? { x: 0, y: 0 } : undefined}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 80 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="shadow-xl bg-[#242424] rounded-lg flex flex-col h-full"
            >
                {/* Header */}
                <div className="flex justify-between items-center rounded-t-lg bg-[#1c1c1c] px-3 py-2 cursor-move z-30 ">
                    <div className="window-header flex-1">
                        <p className="text-center text-white">{title}</p>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setIsMaximized(!isMaximized)}
                            className="w-4 h-4 bg-green-500 rounded hover:bg-green-400 cursor-pointer"
                            title="Maximize"
                        />
                        <button
                            className="w-4 h-4 bg-yellow-500 rounded hover:bg-yellow-400 cursor-pointer"
                            title="Minimize"
                        />
                        <button
                            onClick={() => closeWindow(title)}
                            className="w-4 h-4 bg-red-500 rounded hover:bg-red-400 cursor-pointer"
                            title="Close"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 overflow-auto">
                    {children}
                </div>
            </motion.div>
        </Rnd>


    );
}

export default Window;
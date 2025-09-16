"use client";

import { selectCloseWindow, selectWindows, useWindowStore } from "@/store/windowStore";
import { useState } from "react";
import { Rnd } from "react-rnd";

function Window({ children, title }: { children: React.ReactNode, title: string }) {
    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const windows = useWindowStore(selectWindows);
    const closeWindow = useWindowStore(selectCloseWindow);

    if (!windows.includes(title)) return null;

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
            className="shadow-xl bg-[#242424] rounded-lg flex flex-col overflow-hidden"
        >
            <div className="flex justify-between items-center bg-[#1c1c1c] px-3 py-2 cursor-move z-30">
                <div className="window-header flex-1">
                    <div></div>
                    <p className="text-center text-white">{title}</p>
                </div>

                {/* Window controls */}
                <div className="flex gap-2">
                    {/* Maximize */}
                    <button
                        onClick={() => setIsMaximized(!isMaximized)}
                        className="w-4 h-4 bg-green-500 rounded hover:bg-green-400 cursor-pointer"
                        title="Maximize"
                    />
                    {/* Minimize */}
                    <button
                        className="w-4 h-4 bg-yellow-500 rounded hover:bg-yellow-400 cursor-pointer"
                        title="Minimize"
                    />
                    {/* Close */}
                    <button
                        onClick={() => closeWindow(title)}
                        className="w-4 h-4 bg-red-500 rounded hover:bg-red-400 cursor-pointer"
                        title="Close"
                    />
                </div>
            </div>
            {/* TODO: Adjust tech stack icons */}
            <div className="flex-1 p-4 pb-8 h-full overflow-scroll">
                {children}
            </div>
        </Rnd>
    );
}

export default Window;
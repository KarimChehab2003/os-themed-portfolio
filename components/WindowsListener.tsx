"use client";
import { selectWindows, useWindowStore } from "@/store/windowStore";
import Resume from "@/app/resume/page";
import TechStack from "@/app/tech-stack/page";
import Window from "./Window";
import Notes from "@/app/notes/page";

function WindowsListener() {
    const windows = useWindowStore(selectWindows);

    return (
        <>
            {windows.map((title) => {
                switch (title) {
                    case "Tech Stack":
                        return (
                            <Window key={title} title={title}>
                                <TechStack />
                            </Window>
                        )
                    case "Resume":
                        return (
                            <Window key={title} title={title}>
                                <Resume />
                            </Window>
                        )
                    case "Notes":
                        return (
                            <Window key={title} title={title}>
                                <Notes />
                            </Window>
                        )
                }
            })}
        </>
    )
}

export default WindowsListener;
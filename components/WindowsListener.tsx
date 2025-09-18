"use client";
import { selectWindows, useWindowStore } from "@/store/windowStore";
import Resume from "@/app/resume/page";
import TechStack from "@/app/tech-stack/page";
import Window from "./Window";
import Notes from "@/app/notes/page";
import AboutMe from "@/app/about-me/page";
import ProjectCard from "./ProjectCard";
import Projects from "@/app/projects/page";

function WindowsListener() {
    const windows = useWindowStore(selectWindows);
    console.log(windows);
    return (
        <>
            {windows.map((win, i) => (
                <Window key={i} title={win.title}>
                    {win.data ? (
                        <ProjectCard {...win.data} />
                    ) : win.title === "About Me" ? (
                        <AboutMe />
                    ) : win.title === "Notes" ? (
                        <Notes />
                    ) : win.title === "Tech Stack" ? (
                        <TechStack />
                    ) : win.title === "Resume" ? (
                        <Resume />
                    ) : win.title === "Projects" ? (
                        <Projects />
                    ) : (
                        <p>Empty file: {win.title}</p>
                    )}
                </Window>
            ))}

        </>
    )
}

export default WindowsListener;
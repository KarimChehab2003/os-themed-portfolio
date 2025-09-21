"use client";
import { selectWindows, useWindowStore } from "@/store/windowStore";
import Resume from "@/app/resume/page";
import TechStack from "@/app/tech-stack/page";
import Window from "./Window";
import Notes from "@/app/notes/page";
import AboutMe from "@/app/about-me/page";
import ProjectCard from "./ProjectCard";
import Projects from "@/app/projects/page";

const components: Record<string, React.FC> = {
    "About Me": AboutMe,
    "Notes": Notes,
    "Tech Stack": TechStack,
    "Resume": Resume,
    "Projects": Projects
}

function WindowsListener() {
    const windows = useWindowStore(selectWindows);
    console.log(windows);
    return (
        <>
            {windows.map((win, i) => {
                if (win.data) {
                    return (
                        <Window key={i} title={win.title}>
                            <ProjectCard {...win.data} />
                        </Window>
                    )
                }

                const Component = components[win.title];
                return Component && (
                    <Window key={i} title={win.title}>
                        <Component />
                    </Window>
                )
            })}
        </>
    )

}

export default WindowsListener;
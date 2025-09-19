"use client";

import { projects } from "@/lib/constants";
import { selectOpenWindow, useWindowStore } from "@/store/windowStore";
import { FaFolder } from "react-icons/fa";


function Projects() {
    const openWindow = useWindowStore(selectOpenWindow)
    return (
        <table className="table table-xs">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Last Modified</th>
                </tr>
            </thead>
            <tbody>
                {
                    projects.map((project, i) => (
                        <tr key={i} className="hover:bg-white/10 transition-colors duration-200 cursor-pointer" onClick={() => openWindow(project.name, project)}>
                            <td className="text-xs inline-flex items-center space-x-2"><FaFolder className="min-h-8 min-w-8" /><span>{project.name}</span></td>
                            <td className="text-xs">{project.shortDesc}</td>
                            <td className="text-xs">{project.lastModified}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Projects;
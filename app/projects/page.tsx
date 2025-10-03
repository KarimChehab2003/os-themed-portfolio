"use client";

import ProjectsTableSkeleton from "@/components/ProjectsSkeletonTable";
import { supabase } from "@/lib/supabase/supabaseClient";
import { ProjectData } from "@/lib/types";
import { selectOpenWindow, useWindowStore } from "@/store/windowStore";
import { useEffect, useState } from "react";
import { FaFolder } from "react-icons/fa";


function Projects() {
    const openWindow = useWindowStore(selectOpenWindow);
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchProjects = async () => {
        const { data, error } = await supabase.from("projects").select("*");
        if (error) throw new Error(error.message);
        setProjects(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    console.log(projects)
    return loading ?
        (<ProjectsTableSkeleton />) : (
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
                        projects.map((project) => (
                            <tr key={project.id} className="hover:bg-white/10 transition-colors duration-200 cursor-pointer" onClick={() => openWindow(project.name, project)}>
                                <td className="text-xs inline-flex items-center space-x-2"><FaFolder className="min-h-8 min-w-8" /><span>{project.name}</span></td>
                                <td className="text-xs">{project.short_desc}</td>
                                <td className="text-xs">{project.last_modified}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
}

export default Projects;
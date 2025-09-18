import { projects } from "@/lib/constants";


function Projects() {

    return (
        <table className="table table-xs">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Stack</th>
                    <th>Last Modified</th>
                </tr>
            </thead>
            <tbody>
                {
                    projects.map((project, i) => (
                        <tr key={i} className="hover:bg-white/10 transition-colors duration-200 cursor-pointer">
                            <td className="text-xs">{i + 1}</td>
                            <td className="text-xs">{project.name}</td>
                            <td className="text-xs">{project.shortDesc}</td>
                            <td className="text-xs">{project.stack.join(", ")}</td>
                            <td className="text-xs">{project.lastModified}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Projects;
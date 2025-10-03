import { FaFolder } from "react-icons/fa";

function ProjectsTableSkeleton() {
    return (
        <table className="table table-xs w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Last Modified</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 4 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                        {/* Name cell */}
                        <td>
                            <div className="flex items-center space-x-2">
                                <FaFolder className="min-h-8 min-w-8" />
                                <div className="h-3 w-24 bg-gray-700 rounded"></div>
                            </div>
                        </td>

                        {/* Description cell */}
                        <td>
                            <div className="h-3  bg-gray-700 rounded"></div>
                        </td>

                        {/* Last Modified cell */}
                        <td>
                            <div className="h-3  bg-gray-700 rounded"></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProjectsTableSkeleton;

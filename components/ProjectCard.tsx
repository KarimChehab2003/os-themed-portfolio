import { ProjectData } from "@/lib/types";
import Image from "next/image";

function ProjectCard({ name, long_desc, stack, last_modified, live, code, img }: ProjectData) {
    return (
        <div className="p-4 text-sm space-y-4 max-w-xl mx-auto">
            {/* Title & Last Modified */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white">{name}</h2>
                <span className="text-xs text-gray-400">
                    Last modified: {last_modified}
                </span>
            </div>

            {/* Image Preview */}
            {img && (
                <div className="relative w-full aspect-video bg-gray-800 rounded-md overflow-hidden">
                    <Image
                        src={img}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Description */}
            <p className="text-gray-200">{long_desc}</p>

            {/* Stack */}
            <div>
                <h3 className="font-medium text-white">Tech Stack:</h3>
                <ul className="flex flex-wrap gap-2 mt-1">
                    {stack.map((tech, i) => (
                        <li
                            key={i}
                            className="px-2 py-1 text-xs bg-gray-700 text-gray-200 rounded-md"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Links */}
            <div className="flex gap-3">
                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-info hover:underline"
                    >
                        Live Demo
                    </a>
                )}
                {code && (
                    <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-info hover:underline"
                    >
                        Source Code
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;

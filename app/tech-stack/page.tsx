import FileIcon from "@/components/FileIcon";
import { techStack } from "@/lib/constants";

function TechStack() {
    return (
        <ul className="flex flex-wrap items-center gap-4 overflow-auto">
            {
                techStack.map(({ name, icon: Icon, color }) => (
                    <li key={name}>
                        <FileIcon name={name} icon={<Icon size={44} color={color} />} color={color} />
                    </li>
                ))
            }
        </ul>
    );
}

export default TechStack;
import { desktopIcons } from "@/lib/constants";
import FileIcon from "./FileIcon";

function DesktopGridIcons() {
    return (
        <div className="grow p-4">
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-6 place-items-center sm:place-items-start">
                {
                    desktopIcons.map(({ name, icon: Icon }) => (
                        <li key={name}>
                            <FileIcon name={name} icon={<Icon size={32} />} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DesktopGridIcons;
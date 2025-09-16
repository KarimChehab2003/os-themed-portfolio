"use client";
import { selectOpenWindow, useWindowStore } from "@/store/windowStore";

type FileIconProps = {
    name: string;
    icon: React.ReactNode
    color?: string;
}

function FileIcon(props: FileIconProps) {
    const openWindow = useWindowStore(selectOpenWindow);
    const headerName = props.name.split(".")[0];
    return (
        <article className="flex flex-col items-center justify-center w-20 h-20 hover:bg-white/20 cursor-pointer" onClick={!props.color ? () => openWindow(headerName) : undefined}>
            <figure className="mb-1">
                {props.icon}
            </figure>
            <p className="text-xs text-center">{props.name}</p>
        </article>
    );
}

export default FileIcon;
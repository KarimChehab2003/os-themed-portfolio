import { DesktopIcon } from "@/lib/types";


function FileIcon(props: DesktopIcon) {
    return (
        <article className="flex flex-col items-center justify-center w-20 h-20 hover:bg-white/20 cursor-pointer">
            <figure className="mb-1">
                <props.icon size={32} />
            </figure>
            <p className="text-xs text-center">{props.name}</p>
        </article>
    );
}

export default FileIcon;
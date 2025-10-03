import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type DesktopIcon = {
    name: string;
    icon: IconType;
    color?: string;
}

export type DockLink = {
    href: string;
    color: string;
    tooltip: string;
    icon: IconType;
}


export type Window = {
    title: string;
    data?: ProjectData;
}

export type ProjectData = {
    id: string;
    name: string;
    short_desc: string;
    long_desc: string;
    stack: string[];
    last_modified: string;
    live?: string;
    code?: string;
    img?: StaticImageData;
}

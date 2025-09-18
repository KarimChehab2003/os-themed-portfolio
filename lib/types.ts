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
    name: string;
    shortDesc: string;
    longDesc: string;
    stack: string[];
    lastModified: string;
    live?: string;
    code?: string;
    img?: string;
}

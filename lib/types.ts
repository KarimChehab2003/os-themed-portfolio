import { IconType } from "react-icons";

export type DesktopIcon = {
    name: string;
    icon: IconType
}

export type DockLink = {
    href: string;
    color: string;
    tooltip: string;
    icon: IconType;
}
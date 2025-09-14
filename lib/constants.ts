import { FaFolder, FaRegFileAlt } from "react-icons/fa";
import { DesktopIcon, DockLink } from "./types";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

export const desktopIcons: DesktopIcon[] = [
    {
        name: "Tech Stack",
        icon: FaFolder
    },
    {
        name: "Projects",
        icon: FaFolder
    },
    {
        name: "About Me.txt",
        icon: FaRegFileAlt
    },
    {
        name: "Resume.txt",
        icon: FaRegFileAlt
    },
    {
        name: "Notes.txt",
        icon: FaRegFileAlt
    },
]

export const dockLinks: DockLink[] = [
    {
        tooltip: "My GitHub",
        href: "https://github.com/KarimChehab2003",
        color: "bg-[#181717]",
        icon: SiGithub
    },
    {
        tooltip: "My LinkedIn",
        href: "https://www.linkedin.com/in/karim-chehab-75a0b5318/",
        color: "bg-[#0A66C2]",
        icon: SiLinkedin
    },
    {
        tooltip: "My Instagram",
        href: "https://www.instagram.com/karim_chehab1/",
        color: "bg-pink-500",
        icon: SiInstagram
    },
    {
        tooltip: "My Mail",
        href: "mailto:karimchehab2018@gmail.com",
        color: "bg-[#EA4335]",
        icon: SiGmail
    },
]
import Image from "next/image";

import { FaFolder, FaJs, FaNodeJs, FaReact, FaRegFileAlt } from "react-icons/fa";
import { DesktopIcon, DockLink, ProjectData } from "./types";
import { SiFramer, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiNextdotjs, SiPostgresql, SiReactquery, SiSupabase, SiTailwindcss, SiTypescript, SiVite, SiZod } from "react-icons/si";
import { IconType } from "react-icons";
import { IoLogoFirebase } from "react-icons/io5";
import zustandLogo from "@/public/zustand.svg";
import daisyUILogo from "@/public/daisyUI.svg";
import normalityPreview from "@/public/projects/the-normality.png";
import storePreview from "@/public/projects/e-commerce-nextjs.png";
import financePreview from "@/public/projects/personal-finance-manager.png";

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

const zustandIcon: IconType = (props) => (
    <Image
        src={zustandLogo}
        alt="Zustand"
        width={Number(props.size) || 24}
        height={Number(props.size) || 24}
        style={{ display: "inline-block" }}
    />
);

const daisyUIIcon: IconType = (props) => (
    <Image
        src={daisyUILogo}
        alt="daisyUI"
        width={Number(props.size) || 24}
        height={Number(props.size) || 24}
        style={{ display: "inline-block" }}
    />
);


export const techStack: DesktopIcon[] = [

    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "React Query", icon: SiReactquery, color: "#FF4154" },
    { name: "Zustand", icon: zustandIcon, color: "transparent" },
    { name: "Firebase", icon: IoLogoFirebase, color: "#FFCA28" },
    { name: "Supabase", icon: SiSupabase, color: "#34B27B" },
    { name: "Zod", icon: SiZod, color: "#3E67B1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "daisyUI", icon: daisyUIIcon, color: "transparent" },
    { name: "Framer Motion", icon: SiFramer, color: "#E535AB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
];

export const projects: ProjectData[] = [{
    name: "The Normality ",
    shortDesc: "An anomaly spotting game",
    longDesc:
        "A QA inspector game where you review a website left unfinished by a deceased developer. Spot anomalies, follow protocols, and win by careful observation.",
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Zustand"],
    lastModified: "06/09/2025",
    live: "https://the-normality.vercel.app/",
    code: "https://github.com/KarimChehab2003/the-normality",
    img: normalityPreview,
},
{
    name: "E-Commerce Store",
    shortDesc: "Store with cart & filters",
    longDesc:
        "A responsive e-commerce web app featuring product browsing, category filtering, and a dynamic shopping cart.",
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Zustand"],
    lastModified: "31/08/2025",
    live: "https://e-commerce-nextjs-karim-chehab.vercel.app/",
    code: "https://github.com/KarimChehab2003/e-commerce-nextjs",
    img: storePreview,
},
{
    name: "Personal Finance Manager",
    shortDesc: "Track income & expenses",
    longDesc:
        "A simple web application to manage personal income and expenses. Supports login via Google OAuth.",
    stack: ["React", "TypeScript", "TailwindCSS", "React Query", "Zustand", "Firebase"],
    lastModified: "11/09/2025",
    live: "https://karimchehab2003.github.io/personal-finance-manager/",
    code: "https://github.com/KarimChehab2003/personal-finance-manager",
    img: financePreview,
},
];
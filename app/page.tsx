import BootScreen from "@/components/BootScreen";
import BottomDock from "@/components/BottomDock";
import FileIcon from "@/components/FileIcon";
import Taskbar from "@/components/Taskbar";
import { desktopIcons } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen relative os-wallpaper">
      <BootScreen />

      <Taskbar />

      <div className="grow p-4">
        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-6 place-items-center sm:place-items-start">
          {
            desktopIcons.map((fileIcon) => (
              <li key={fileIcon.name}>
                <FileIcon {...fileIcon} />
              </li>
            ))
          }
        </ul>
      </div>

      <BottomDock />
    </main>
  );
}

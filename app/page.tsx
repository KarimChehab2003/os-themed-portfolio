import BootScreen from "@/components/BootScreen";
import Taskbar from "@/components/Taskbar";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen relative os-wallpaper">
      <BootScreen />

      <Taskbar />

      <div className="grow p-4">
        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4">
          <li>file 1</li>
          <li>file 1</li>
          <li>file 1</li>
          <li>file 1</li>
        </ul>
      </div>
    </main>
  );
}

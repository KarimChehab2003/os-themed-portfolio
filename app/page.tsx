import BootScreen from "@/components/BootScreen";
import BottomDock from "@/components/BottomDock";
import ActivityBar from "@/components/ActivityBar";
import DesktopGridIcons from "@/components/DesktopIconsGrid";
import WindowsListener from "@/components/WindowsListener";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen min-h[100dvh] h-full relative os-wallpaper overflow-hidden">
      <BootScreen />

      <ActivityBar />

      <main className="flex-1 relative">
        <DesktopGridIcons />
        <WindowsListener />
      </main>

      <BottomDock />
    </div>
  );
}

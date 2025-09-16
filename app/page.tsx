import BootScreen from "@/components/BootScreen";
import BottomDock from "@/components/BottomDock";
import ActivityBar from "@/components/ActivityBar";
import DesktopGridIcons from "@/components/DesktopIconsGrid";
import Window from "@/components/Window";
import TechStack from "./tech-stack/page";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen h-full relative os-wallpaper overflow-hidden">
      <BootScreen />

      <ActivityBar />

      <div className="flex-1 relative">
        <DesktopGridIcons />
        <Window title="Tech Stack">
          <TechStack />
        </Window>

      </div>

      <BottomDock />
    </main>
  );
}

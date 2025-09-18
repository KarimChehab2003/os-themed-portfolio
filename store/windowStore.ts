import { ProjectData, Window } from "@/lib/types";
import { create } from "zustand";



type WindowStore = {
    windows: Window[];

    openWindow: (title: string, data?: ProjectData) => void;
    closeWindow: (title: string) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
    windows: [{ title: "Notes" }],

    openWindow: (title, data) => {
        if (useWindowStore.getState().windows.find((win) => win.title === title)) return;
        set((state) => ({ windows: [...state.windows, { title, data }] }));
    },
    closeWindow: (title) => {
        set((state) => ({ windows: state.windows.filter((currentWindow) => currentWindow.title !== title) }))
    }
}))

export const selectWindows = (state: WindowStore) => state.windows;
export const selectOpenWindow = (state: WindowStore) => state.openWindow;
export const selectCloseWindow = (state: WindowStore) => state.closeWindow;
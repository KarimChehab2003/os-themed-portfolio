import { create } from "zustand";

type WindowStore = {
    windows: string[];

    openWindow: (window: string) => void;
    closeWindow: (window: string) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
    windows: ["Notes"],

    openWindow: (window) => {
        if (useWindowStore.getState().windows.includes(window)) return;
        set((state) => ({ windows: [...state.windows, window] }));
    },
    closeWindow: (window) => {
        set((state) => ({ windows: state.windows.filter((currentWindow) => currentWindow !== window) }))
    }
}))

export const selectWindows = (state: WindowStore) => state.windows;
export const selectOpenWindow = (state: WindowStore) => state.openWindow;
export const selectCloseWindow = (state: WindowStore) => state.closeWindow;
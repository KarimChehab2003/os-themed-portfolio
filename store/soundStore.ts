import { create } from "zustand";

type SoundStore = {
    enabled: boolean;

    playClick: () => void;
    toggleSound: () => void;
}

export const useSoundStore = create<SoundStore>((set) => ({
    enabled: true,

    playClick: () => {
        if (!useSoundStore.getState().enabled) return;
        const audio = new Audio("/sounds/click.wav");
        audio.volume = 0.4;
        audio.currentTime = 0;
        audio.play();
    },

    toggleSound: () => set((state) => ({ enabled: !state.enabled }))
}))

export const selectEnabled = (state: SoundStore) => state.enabled;
export const selectPlayClick = (state: SoundStore) => state.playClick;
export const selectToggleSound = (state: SoundStore) => state.toggleSound;
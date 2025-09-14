"use client";

import { selectPlayClick, useSoundStore } from "@/store/soundStore";
import { useEffect } from "react";

function ClickSoundProvider() {
    const playClick = useSoundStore(selectPlayClick);

    useEffect(() => {
        document.addEventListener("click", playClick);
        return () => document.removeEventListener("click", playClick)
    }, [playClick])
    return null;
}

export default ClickSoundProvider;
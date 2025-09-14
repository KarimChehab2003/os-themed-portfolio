"use client";

import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: "short",
                month: "short",
                day: "numeric"
            };

            const date = new Intl.DateTimeFormat("en-US", options).format(now);
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            setTime(`${hours}:${minutes}  ${date}`)
        }
        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, [])
    return (
        <div>{time}</div>
    );
}

export default Clock;
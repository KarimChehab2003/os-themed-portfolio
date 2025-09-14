"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

function BootScreen() {
    const [show, setShow] = useState<boolean>(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 1500)

        return () => clearTimeout(timer);
    })
    return (
        <AnimatePresence>
            {show ? <motion.main
                initial={{ filter: "none", opacity: 1 }}
                transition={{ duration: 1.5 }}
                exit={{ filter: "blur(10px)", opacity: 0 }}
                className="absolute top-0 left-0 w-full min-h-screen flex justify-center items-center z-50 bg-black">
                <motion.p
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "none", opacity: 1 }}
                    className="text-4xl sm:text-5xl font-light">Hello World</motion.p>
            </motion.main> : null}
        </AnimatePresence>
    );
}

export default BootScreen;
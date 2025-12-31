"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export const BlurReveal = ({
    children,
    className,
    delay = 0,
    duration = 0.8,
    yOffset = 20,
}: BlurRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: yOffset
            }}
            animate={isInView ? {
                opacity: 1,
                filter: "blur(0px)",
                y: 0
            } : {}}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={cn("will-change-[transform,opacity,filter]", className)}
        >
            {children}
        </motion.div>
    );
};

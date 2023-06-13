import { motion, useScroll } from "framer-motion";

import { HalftoneCardProps } from "../types";

import "../style/HalftoneCard.scss";
import { useRef } from "react";

export const HalftoneCard: React.FC<React.HTMLAttributes<HTMLDivElement> & HalftoneCardProps> = ({
    children,
    src,
    title,
    description,
    className = "",
    disableOverlay = false,
    style = {},
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress: effectOpacity } = useScroll({
        target: ref, offset: ["-100px", "90%"]
    });

    const backgroundStyle = src ? { backgroundImage: `url(${src})` } : {}

    const body = children ? children : <>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
    </>

    return <motion.div
        ref={ref}
        className={`halftone ${disableOverlay ? "" : "overlay"} ${className}`}
        style={{
            ...backgroundStyle,
            ...style,
        }}
    >
        <motion.div className="blur" style={{
            ...backgroundStyle,
            opacity: effectOpacity,
        }} />

        <div className="halftone-content">{body}</div>
    </motion.div>
}
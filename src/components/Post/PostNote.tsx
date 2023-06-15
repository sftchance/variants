import { useState } from "react";

import { motion } from "framer-motion";

import { PostNoteProps } from "../../types";

import "../../style/PostNote.scss";

export const PostNote: React.FC<React.HTMLAttributes<HTMLElement> & PostNoteProps> = ({
    children,
    author,
    note,
    created,
    side = "right",
    hover = false
}) => {
    const [isHovered, setIsHovered] = useState(false)

    const className = `post-note-content ${side || ""} ${isHovered ? "hover" : ""}`

    return <>
        <span
            className={`post-note ${hover ? "hover" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="note">{children}</span>
        </span>

        {(author || note) && <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
        >
            {author && <span>
                <img src={`/cdn/author/${author}.png/`} alt={author} />

                <strong>{author} {created && ` // ${created}`}</strong>
            </span>}

            {note && <span>{note}</span>}
        </motion.span>}
    </>

}
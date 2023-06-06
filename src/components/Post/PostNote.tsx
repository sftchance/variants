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
    return <span className={`note ${hover ? "hover" : ""}`}>
        {children}

        {(author || note) && <span className={`content ${side || ""}`}>
            {author && <span>
                <img src={`/cdn/author/${author}.png/`} alt={author} />

                <strong>{author} {created && ` // ${created}`}</strong>
            </span>}

            {note && <span>{note}</span>}
        </span>}
    </span >
}
import { PostNoteProps } from "../../types";

import "../../style/PostNote.scss";

export const PostNote = (props: PostNoteProps) => {
    return <span className={`note ${props.hover ? "hover" : ""}`}>
        {props.children}

        <span className={`content ${props.side || ""}`}>
            {props.author && <span>
                <img src={`/cdn/author/${props.author}.png/`} alt={props.author} />

                <strong>{props.author} {props.created && ` // ${props.created}`}</strong>
            </span>}

            {props.note && <span>{props.note || ""}</span>}
        </span>
    </span >
}
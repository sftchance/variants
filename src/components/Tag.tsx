import { Link } from "react-router-dom"

import "../style/Tag.scss";

export const Tag = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return <Link to={`/post/?tag=${props.children}`}>
        <span className="tag">{props.children}</span>
    </Link>
}
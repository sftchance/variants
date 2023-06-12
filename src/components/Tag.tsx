import { Link } from "react-router-dom"

import { TagProps } from "../types"

import "../style/Tag.scss";

export const Tag: React.FC<React.HTMLAttributes<HTMLDivElement> & TagProps> = ({
    children,
    to
}) => {
    return <Link to={to ? to : `/post/?tag=${children}`}>
        <span className="tag">{children}</span>
    </Link>
}
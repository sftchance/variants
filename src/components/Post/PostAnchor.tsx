import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/pro-duotone-svg-icons";

import "../../style/PostAnchor.scss";

export const PostAnchor: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
    href,
    children,
    ...rest
}) => {
    if (!href) return <a {...rest}>{children}</a>

    const isInternal = href?.startsWith("/");

    if (isInternal) return <Link to={href}>{children}</Link>

    return <a href={href} target="_blank" rel="noopener noreferrer" className="external" {...rest}>
        {children}
        <FontAwesomeIcon icon={faExternalLink} />
    </a>
}
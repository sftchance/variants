import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/pro-duotone-svg-icons";

import "../../style/PostAnchor.scss";

export const PostAnchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, children } = props;

    if (!href) return <a {...props} />

    const isInternal = href?.startsWith("/");

    if (isInternal) return <Link to={href}>{children}</Link>

    return <a {...props} target="_blank" rel="noopener noreferrer" className="external">
        {children}
        <FontAwesomeIcon icon={faExternalLink} />
    </a>
}
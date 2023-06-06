import { HalftoneCardProps } from "../types";

import "../style/HalftoneCard.scss";

export const HalftoneCard: React.FC<React.HTMLAttributes<HTMLDivElement> & HalftoneCardProps> = ({
    children,
    src,
    title,
    description,
    className = "",
    disableOverlay = false,
    style = {},
    ...rest
}) => {
    const backgroundStyle = src ? { backgroundImage: `url(${src})` } : {}

    const body = children ? children : <>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
    </>

    return <div
        className={`halftone ${disableOverlay ? "" : "overlay"} ${className}`}
        style={{ ...backgroundStyle, ...style }}
        {...rest}
    >
        <div className="blur" style={style} />

        <div className="content">{body}</div>
    </div>
}
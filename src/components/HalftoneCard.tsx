import { HalftoneCardProps } from "../types";

import "../style/HalftoneCard.scss";

export const HalftoneCard = (props: HalftoneCardProps) => {
    const { children, src } = props;

    const isOverlayDisabled = props?.disableOverlay === true;

    const className = `halftone ${isOverlayDisabled ? "" : "overlay"} ${props.className}`

    const style = src ? { backgroundImage: `url(${props.src})` } : {}

    const body = children ? children : <>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </>

    return <div {...props} className={className} style={{ ...style, ...props.style }}>
        <div className="blur" style={style} />

        <div className="content">{body}</div>
    </div>
}
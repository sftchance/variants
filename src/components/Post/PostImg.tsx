import { useRef } from "react";

import "../../style/PostImg.scss";

export const PostImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
    src,
    alt,
    ...rest
}) => {
    const ref = useRef<HTMLImageElement>(null);

    return <div className="post-img">
        <img ref={ref} alt={alt} src={src} {...rest} />

        <span className="caption">{alt}</span>
    </div>
}
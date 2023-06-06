import { useRef } from "react";

import "../../style/PostImg.scss";

export const PostImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
    src,
    alt,
    ...rest
}) => {
    const ref = useRef<HTMLImageElement>(null);

    return <div className="post-img">
        <img ref={ref} alt={alt} {...rest} />

        <div className="blur" style={{
            backgroundImage: `url(${src})`,
            width: ref.current?.clientWidth,
            height: ref.current?.clientHeight,
        }} />

        <span className="caption">{alt}</span>
    </div>
}
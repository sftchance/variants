import { useRef } from "react";

import "../../style/PostImg.scss";

export const PostImg = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { alt } = props;

    const ref = useRef<HTMLImageElement>(null);

    return <div className="post-img">
        <img {...props} ref={ref} />

        <div className="blur" style={{
            backgroundImage: `url(${props.src})`,
            width: ref.current?.clientWidth,
            height: ref.current?.clientHeight,
        }} />

        <span className="caption">{alt}</span>
    </div>
}
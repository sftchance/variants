import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboard } from "@fortawesome/pro-duotone-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { useClipboard } from "../../hooks";
import { PostProps } from "../../types";

export const PostHeader: React.FC<{
    scrollRef: React.RefObject<HTMLDivElement>;
    data: PostProps
}> = ({ scrollRef, data }) => {
    const { copy } = useClipboard({ text: window.location.href });

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const [copied, setCopied] = useState(false);

    const [isFixed, setIsFixed] = useState(false);

    const title = `⚫%20${encodeURIComponent(data.title ?? "")}`
    const authors = data.attributes?.authors?.length === 0
        ? ""
        : `%20${encodeURIComponent(`by ${data.attributes?.authors?.map(author => `@${author}`).join(" & ")}` ?? "")}`;
    const twitter = `https://twitter.com/intent/tweet?text=${title}${authors}&url=${encodeURIComponent(window.location.href)}`;

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const { top, bottom, height } = scrollRef.current.getBoundingClientRect();

            const percentToBottom = 100 * ((bottom - window.innerHeight) / height);

            const percentage = Math.max(0, Math.min(Math.round(100 - percentToBottom), 100));

            setScrollPercentage(percentage);

            setIsFixed(top <= -40)
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollRef]);

    return <div className={`title ${!isFixed ? "hidden" : ""}`} >
        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            {data.title}
        </p>

        <p className="percent">
            <span>{scrollPercentage}%</span>

            <FontAwesomeIcon icon={copied ? faCheck : faClipboard} onClick={() => {
                copy();

                setCopied(true);

                setTimeout(() => setCopied(false), 1000);
            }} />

            <a href={twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </p>
    </div>
}
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboard } from "@fortawesome/pro-duotone-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { motion, useSpring } from "framer-motion";

import { useClipboard } from "../../hooks";
import { PostProps } from "../../types";
import { useScroll } from "framer-motion";

export const PostHeader: React.FC<{
    scrollRef: React.RefObject<HTMLDivElement>;
    data: PostProps
}> = ({ scrollRef, data }) => {
    const { scrollYProgress } = useScroll();

    const { scrollYProgress: refScrollYProgress } = useScroll({ target: scrollRef, offset: ["-100px", "100px"] })

    const [copied, setCopied] = useState(false);

    const { copy } = useClipboard({ text: window.location.href, onCopy: () => setCopied(true) });

    const title = `⚫%20${encodeURIComponent(data.title ?? "")}`
    const authors = data.attributes?.authors?.length === 0
        ? ""
        : `%20${encodeURIComponent(`by ${data.attributes?.authors?.map(author => `@${author}`).join(" & ")}` ?? "")}`;
    const twitter = `https://twitter.com/intent/tweet?text=${title}${authors}&url=${encodeURIComponent(window.location.href)}`;

    return <motion.div className="title" style={{ opacity: refScrollYProgress }}>
        <motion.div className="percentage" style={{ scaleX: useSpring(scrollYProgress) }} />

        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            {data.title}
        </p>

        <p className="percent">
            <FontAwesomeIcon icon={copied ? faCheck : faClipboard} onClick={() => {
                copy();
                setCopied(true);

                setTimeout(() => setCopied(false), 1000);
            }} />

            <a href={twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </p>
    </motion.div>
}
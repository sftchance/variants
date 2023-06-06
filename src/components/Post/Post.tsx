import { useEffect, useRef, useState } from "react";

import { Link, useParams } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronLeft, faChevronRight, faClipboard } from "@fortawesome/pro-duotone-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Markdown from 'markdown-to-jsx';

import { useClipboard, usePost } from "../../hooks";

import { PostNote, Container, HalftoneCard, Header, PostCode, PostImg, Tag, PostCard, PostAnchor } from "../";

import "../../style/Post.scss"

export const Post: React.FC = () => {
    const { copy } = useClipboard(window.location.href);

    const { id } = useParams<{ id: string }>();

    const ref = useRef<HTMLDivElement>(null);

    const data = usePost(`${id}`);

    const [isFixed, setIsFixed] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const [copied, setCopied] = useState(false);

    const authorsTag = data?.attributes.authors?.map(author => `@${author}`).join(" & ");
    const twitterLink = `https://twitter.com/intent/tweet?text=⚫%20${encodeURIComponent(data?.title ?? "")}%20${encodeURIComponent(`by ${authorsTag}` ?? "")}&url=${encodeURIComponent(window.location.href)}`;

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { top, bottom, height } = ref.current.getBoundingClientRect();

                const percentToBottom = 100 * ((bottom - window.innerHeight) / height);

                const percentage = Math.max(0, Math.min(Math.round(100 - percentToBottom), 100));

                setScrollPercentage(percentage);

                setIsFixed(top <= -40)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!data) return <></>

    return <>
        <Header />

        <Container className="thin post">
            <div className={`title ${!isFixed ? "hidden" : ""}`} >
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

                    <a href={twitterLink} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </p>
            </div>

            <div className="image">
                <HalftoneCard
                    className="img"
                    src={data.image}
                    disableOverlay={true}
                    style={{ width: 920, height: 500, marginInline: "auto" }}
                />

                {data.attributes.inbound && <Link to={`/post/${data.attributes.inbound?.[0]}/?from=${id}`} className="prev">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>}

                {data.attributes.related && <Link to={`/post/${data.attributes.related?.[0]}/?from=${id}`} className="next">
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>}
            </div>


            <div className="content" ref={ref}>
                <h1>{data.title}

                </h1>

                <div className="info">
                    <p className="author">
                        <div className="avatars">
                            {data.attributes.authors.map((author, index) => {
                                return <img key={index} src={`/cdn/author/${author}.png/`} alt={author} />
                            })}
                        </div>

                        {data.attributes.authors.map((author, index) => <>
                            <Link key={index} to={`/post/?author=${author}`}>{author}</Link>
                            {index < data.attributes.authors.length - 1 && <span>&</span>}
                        </>)}

                    </p>

                    <p>// {new Date(data.attributes.created).toLocaleDateString()}</p>

                    <div className="right">
                        <p>
                            {data.attributes.readTime} min{data.attributes.readTime > 1 ? "s" : ""}. read
                        </p>
                    </div>
                </div>

                {data.content && <Markdown
                    className="markdown"
                    options={{
                        overrides: {
                            a: {
                                component: PostAnchor,
                            },
                            author: {
                                component: PostNote,
                            },
                            code: {
                                component: PostCode,
                            },
                            img: {
                                component: PostImg
                            }
                        }
                    }
                    } >
                    {data.content}
                </Markdown>}

                <p>
                    {data.attributes.tags?.map((tag, index) => <Tag
                        key={index} children={tag} />)}
                </p>

                {data.attributes.related && <>
                    <hr />

                    <div className="related">
                        {data.attributes.related.map((filename, index) => {
                            return <PostCard key={index} filename={filename} />
                        })}
                    </div>
                </>}
            </div >
        </Container >
    </>
}
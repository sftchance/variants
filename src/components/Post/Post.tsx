import { useRef } from "react";

import { Link, useParams } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/pro-duotone-svg-icons";

import { usePost } from "../../hooks";

import {
    Container,
    HalftoneCard,
    Header,
    Meta,
    PostCard,
    PostHeader,
    PostInfo,
    PostMarkdown,
    Tag,
} from "../";

import "../../style/Post.scss"

export const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const ref = useRef<HTMLDivElement>(null);

    const data = usePost(`${id}`);

    if (!data) return <></>

    return <>
        <Meta title={data.title.toUpperCase()} description={data.description} />

        <Header />

        <Container className="thin post">
            <PostHeader scrollRef={ref} data={data} />

            <div className="image">
                <HalftoneCard
                    className="img"
                    src={data.image}
                    disableOverlay={true}
                    style={{ width: 920, height: 500, marginInline: "auto" }}
                />

                {data.attributes.inbound &&
                    data.attributes.inbound.length > 0 &&
                    <Link to={`/post/${data.attributes.inbound?.[0]}/?from=${id}`} className="prev">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>}

                {data.attributes.related &&
                    data.attributes.related.length > 0 &&
                    <Link to={`/post/${data.attributes.related?.[0]}/?from=${id}`} className="next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>}
            </div>


            <div className="content" ref={ref}>
                <h1>{data.title}</h1>

                <PostInfo data={data} />

                {data.content && <PostMarkdown children={data.content} />}

                {data.attributes.tags && <p>
                    {data.attributes.tags?.map((tag, index) => <Tag
                        key={index} children={tag} />)}
                </p>}

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
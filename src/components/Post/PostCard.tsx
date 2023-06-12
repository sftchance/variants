import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-duotone-svg-icons";

import { PostCardProps } from "../../types";

import { usePost } from "../../hooks";

import { HalftoneCard, Tag } from "../";

import "../../style/PostCard.scss"


export const PostCard: React.FC<PostCardProps> = ({ filename }) => {
    const post = usePost(filename)

    if (!post) return <></>

    const author = post.attributes.authors[0]

    return <Link to={`/post/${post.filename}/`} className="post-container">
        <HalftoneCard className="post" src={post.image} disableOverlay={true}>
            <div className="author">
                <Tag to={`/post/?author=${author}`}>
                    <img src={`/cdn/author/${author}.png/`} alt={author} />
                    {author}
                </Tag>
            </div>

            {post.attributes.tags?.map((tag: string, index: number) => <Tag key={index}>{tag}</Tag>)}

            <div className="date">
                <Tag to="/post/?date=">
                    {(new Date(post.attributes.created)).toLocaleDateString()}
                </Tag>
            </div>
        </HalftoneCard>

        <div className="info">
            <h3>{post.title}</h3>
            <p>{post.description}...</p>

            <Link to={`/post/${post.filename}/`}>
                Read More
                <FontAwesomeIcon icon={faChevronRight} />
            </Link>
        </div>
    </Link>
}
import { Link } from "react-router-dom";

import { PostCardProps } from "../../types";

import { usePost } from "../../hooks";

import { HalftoneCard, Tag } from "../";

import "../../style/PostCard.scss"

export const PostCard = ({ filename }: PostCardProps) => {
    const post = usePost(filename)

    if (!post) return <></>

    return <Link to={`/post/${post.filename}/`} className="post-container">
        <HalftoneCard className="post" src={post.image} disableOverlay={true}>
            {post.attributes.tags?.map((tag: string, index: number) => <Tag key={index}>{tag}</Tag>)}
        </HalftoneCard>

        <div className="info">
            <h3>{post.title}</h3>
            <p>{post.description}...</p>
        </div>
    </Link>
}
import { useMemo } from "react"

import { useSearchParams } from "react-router-dom"

import { usePosts } from "../../hooks"

import { Container, Header, Meta, PostCard, PostTimeline } from "../"

import "../../style/Posts.scss"

export const Posts: React.FC = () => {
    const directory = usePosts()

    const [searchParams] = useSearchParams();

    const tag = searchParams.get("tag");
    const author = searchParams.get("author");

    const filteredDirectory = useMemo(() => directory.filter(post => (
        (tag && post.attributes.tags?.includes(tag)) ||
        (author && post.attributes.authors.includes(author)) ||
        (!tag && !author)
    )), [directory, tag, author]);

    return <>
        <Meta title="LIBRARY OF VARIANTS"
            description="Explore the records and writings of each CHANCE variant and the journey of their creation. You can start by choosing a note that catches your eye and following the web of connections from there." />

        <Header />

        <Container>
            <PostTimeline />

            <div className="posts">
                {filteredDirectory.map((post, index) => (
                    <PostCard key={index} filename={post.filename} />
                ))}
            </div>
        </Container>
    </>
}
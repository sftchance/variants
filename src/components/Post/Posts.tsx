import { useMemo } from "react"

import { useSearchParams } from "react-router-dom"

import { usePosts } from "../../hooks"

import { Container, Header, Meta, PostCard } from "../"

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

    const first = filteredDirectory[0];
    const backgroundText = first && filteredDirectory.length === 0
        ? "No posts found"
        : (first?.content || "").replace(/[^\w\s]/g, "");

    return <>
        <Meta title="Posts" description="Discover the writings of each CHANCE variant and the journey of their creation." />

        <Header />

        <Container>
            <div className="header">
                <p className="background-text">{backgroundText}</p>

                <h1>THE LIBRARY</h1>
                <p className="lead">Explore the records and writings of each CHANCE variant and the journey of their creation. You can start by choosing a note that catches your eye and following the web of connections from there.</p>
            </div>

            <div className="posts">
                {filteredDirectory.map((post, index) => (
                    <PostCard key={index} filename={post.filename} />
                ))}
            </div>
        </Container>
    </>
}
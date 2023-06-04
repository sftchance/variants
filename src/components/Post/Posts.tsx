import { useLocation } from "react-router-dom"

import { usePosts } from "../../hooks"

import { Container, Header, PostCard } from "../"

import "../../style/Posts.scss"

export const Posts = () => {
    const directory = usePosts()

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const { tag, author } = Object.fromEntries(queryParams.entries());

    const filteredDirectory = directory.filter(post => {
        if (tag) {
            return post.attributes.tags?.includes(tag)
        }

        if (author) {
            return post.attributes.authors.includes(author)
        }

        return true;
    })

    const backgroundText = filteredDirectory.length === 0 ? "No posts found" : filteredDirectory[0].content
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .trim();

    return <>
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
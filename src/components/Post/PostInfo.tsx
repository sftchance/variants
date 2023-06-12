import { Link } from "react-router-dom"
import { PostProps } from "../../types"
import { CountUp } from ".."

export const PostInfo: React.FC<{ data: PostProps }> = ({ data }) => {
    return <div className="info">
        <p className="author">
            <div className="avatars">
                {data?.attributes?.authors.map((author, index) => <img
                    key={index} src={`/cdn/author/${author}.png/`} alt={author} />)}
            </div>

            {data?.attributes?.authors.map((author, index) => <>
                <Link key={index} to={`/post/?author=${author}`}>{author}</Link>

                {index < data?.attributes?.authors.length - 1 && <span>&</span>}
            </>)}
        </p>

        <p>// {new Date(data.attributes.created).toLocaleDateString()}</p>

        <p className="right">
            <CountUp end={data.attributes.readTime} /> min{data.attributes.readTime > 1 ? "s" : ""}. read
        </p>
    </div>
}
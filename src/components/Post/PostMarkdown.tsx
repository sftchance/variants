import Markdown from "markdown-to-jsx"

import { PostMarkdownProps } from "../../types"

import { PostAnchor, PostCode, PostImg, PostNote } from "./"

export const PostMarkdown: React.FC<PostMarkdownProps> = ({ children }) => {
	const overrides = {
		a: {
			component: PostAnchor
		},
		author: {
			component: PostNote
		},
		code: {
			component: PostCode
		},
		img: {
			component: PostImg
		}
	}

	return (
		<Markdown className="markdown" options={{ overrides }}>
			{children}
		</Markdown>
	)
}

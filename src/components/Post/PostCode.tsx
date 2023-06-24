import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"

import { PostCodeProps } from "../../types"

export const PostCode: React.FC<Omit<React.HTMLAttributes<HTMLElement>, "children"> & PostCodeProps> = ({
	className,
	children,
	language
}) => {
	const codeLanguage = className?.replace("lang-", "")

	return (
		<>
			<SyntaxHighlighter language={language || codeLanguage} style={oneLight}>
				{children}
			</SyntaxHighlighter>
		</>
	)
}

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface PostCodeProps {
    className?: string;
    children: string;
}

export const PostCode = (props: PostCodeProps) => {
    const { className, children } = props;

    const language = className?.replace('lang-', '');

    return (
        <>
            <SyntaxHighlighter language={language} style={oneLight}>
                {children}
            </SyntaxHighlighter>
        </>
    )
}
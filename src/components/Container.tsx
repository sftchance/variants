import "../style/Container.scss"

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...rest }) => {
	return (
		<div {...rest} className={`container ${className}`}>
			{children}
		</div>
	)
}

import { Container } from "."

import "../style/Copyright.scss"

export const Copyright: React.FC = () => {
	return (
		<Container className="copyright">
			<p>© 2022 - {new Date().getFullYear()} CHANCE</p>
		</Container>
	)
}

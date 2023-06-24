import { Helmet } from "react-helmet-async"

import { MetaProps } from "../types"

export const Meta: React.FC<MetaProps> = ({ title, description, image }) => {
	return (
		<Helmet>
			<title>{title} | CHANCE</title>
			<meta name="description" content={description} />

			<meta property="og:title" content={`${title} | CHANCE`} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={window.location.href} />
			<meta property="og:image" content={image || `${window.location.origin}/opengraph.png`} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@sftchance" />
			<meta name="twitter:creator" content="@sftchance" />
			<meta name="twitter:title" content={`${title} | CHANCE`} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image || `${window.location.origin}/opengraph.png`} />
		</Helmet>
	)
}

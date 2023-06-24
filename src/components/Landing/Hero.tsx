import { StaticWrapperSectionProps } from "../../types"

import { CountUp } from ".."

import "../../style/Hero.scss"

export const Hero: React.FC<Partial<StaticWrapperSectionProps>> = () => {
	return (
		<div className="hero">
			<h1>WELCOME TO THE HOME OF CHANCE.</h1>
			<p className="lead">
				Explore a new kind of digital representation with cultivated variant outputs. With access to a growing
				collection of unique content you can find the piece that draws your attention the most.
			</p>

			<div className="stats">
				<h3>
					<CountUp end={2} />
				</h3>
				<h3>
					<CountUp end={109} prepend="~" />
				</h3>
				<h3>
					<CountUp end={159000} append="+" />
				</h3>
				<h3>
					<CountUp end={831000} append="+" />
				</h3>

				<p className="lead">Variants</p>
				<p className="lead">Posts</p>
				<p className="lead">Words</p>
				<p className="lead">Views</p>
			</div>
		</div>
	)
}

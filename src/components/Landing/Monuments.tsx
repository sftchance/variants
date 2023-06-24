import { StaticWrapperSectionProps } from "../../types"

import { HalftoneCard } from ".."

import "../../style/Monuments.scss"

export const Monuments: React.FC<Partial<StaticWrapperSectionProps>> = () => {
	return (
		<div className="monuments">
			<h2>
				STANDING MONUMENTS OF
				<br /> VARIANT EXPRESSION.
			</h2>

			<div className="bi-fold">
				<p>
					At the core of this experiment lives a single question: do variants provide a better means of
					expression and being? Explore the outputs of each variant multiverse and see how each version has
					been approached while being considerate of the differences of each environment and focus.
				</p>
				<p>
					Capturing the essence of the encompassing focus you can become a tourist to the world of CHANCE
					variants. Avoiding the typical death of digital outputs accompanied by growth and redefinition,
					CHANCE variants are maintained as a reference of provenance and knowledge.
				</p>
			</div>

			<div className="expressions">
				<HalftoneCard
					src="cdn/remus.png"
					title="Remus"
					description="A collection of plug-and-play EVM primitives using shared knowledge."
				/>
				<HalftoneCard
					src="cdn/romulus.png"
					title="Romulus"
					description="A build-ready framework  for EVM protocol interfaces."
				/>
				<HalftoneCard
					src="cdn/orbs.png"
					title="Orbs"
					description="Galactic network definition  of deployed onchain primitives."
				/>
				<HalftoneCard
					src="cdn/posterity.png"
					title="Posterity"
					description="An aura-like visualization of oneself in a digital world."
				/>
				<HalftoneCard
					src="cdn/library.png"
					title="Library"
					description="An aggregate library of all existing variants and their outputs."
				/>
			</div>

			<p className="context">
				What's a "Monument of Variant Expression":: A personal digital <em>Library of Alexandria</em>.
			</p>
		</div>
	)
}

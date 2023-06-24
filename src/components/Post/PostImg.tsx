import { useEffect, useRef, useState } from "react"

import { HalftoneCard } from ".."
import "../../style/PostImg.scss"

export const PostImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt }) => {
	const ref = useRef<HTMLImageElement>(null)

	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0
	})

	useEffect(() => {
		if (!ref.current) return

		const { current } = ref

		const handleImageLoad = () => {
			setDimensions({
				width: current.width,
				height: current.height
			})
		}

		current.addEventListener("load", handleImageLoad)

		return () => {
			current.removeEventListener("load", handleImageLoad)
		}
	}, [ref])

	return (
		<div className="post-img">
			<img ref={ref} alt={alt} src={src} />

			<HalftoneCard src={src} disableOverlay={true} style={dimensions} />

			<span className="caption">{alt}</span>
		</div>
	)
}

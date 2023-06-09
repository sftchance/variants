import { useMemo } from "react"

import { HeaderLinkProps } from "../types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useScroll } from "../hooks"

export const HeaderLink: React.FC<React.HTMLAttributes<HTMLButtonElement> & HeaderLinkProps> = ({
	dataId,
	text,
	icon,
	className = ""
}) => {
	const { target, onClick } = useScroll()

	const isActive = useMemo((): boolean => {
		if (!dataId) return false

		const element = document.getElementById(dataId)

		if (!element) return false

		return target.x >= element.offsetLeft && target.x <= element.offsetLeft + element.offsetWidth
	}, [target, dataId])

	return (
		<button className={`link ${isActive ? "active" : ""} ${className}`} data-id={dataId} onClick={onClick}>
			{text}
			{icon && <FontAwesomeIcon icon={icon} />}
		</button>
	)
}

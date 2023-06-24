import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react"

import { ScrollContextProps, TargetProps } from "../types"

const DEFAULT_TARGET: TargetProps = {
	x: 0,
	type: "scroll"
}

export const ScrollContext = createContext<ScrollContextProps>({
	ref: undefined,
	target: DEFAULT_TARGET,
	onTarget: () => {
		return
	}
})

export const ScrollProvider: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, "children">> = ({ children }) => {
	const ref = useRef<HTMLDivElement>(null)

	const [target, setTarget] = useState(DEFAULT_TARGET)

	const behavior = useMemo(() => {
		switch (target.type) {
			case "scroll":
				return "auto"
			case "click":
				return "smooth"
		}
	}, [target.type])

	const onTarget = useCallback((x: number, type?: "scroll" | "click") => {
		setTarget({
			x,
			type: type || "scroll"
		})
	}, [])

	useEffect(() => {
		if (!ref.current) return

		ref.current.scrollTo({
			top: 0,
			left: target.x,
			behavior
		})
	}, [target, behavior])

	return (
		<ScrollContext.Provider
			value={{
				ref,
				target,
				onTarget
			}}
		>
			{children}
		</ScrollContext.Provider>
	)
}

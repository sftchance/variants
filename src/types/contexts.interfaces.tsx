export type TargetProps = {
	x: number
	type: "scroll" | "click"
}

export type ScrollContextProps = {
	ref?: React.RefObject<HTMLDivElement>
	target: TargetProps
	onTarget: (x: number, type?: "scroll" | "click") => void
}

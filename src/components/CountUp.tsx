import { useEffect, useMemo, useState } from "react"

import { CountUpProps } from "../types"

import { verboseUnit } from "../utils"

export const CountUp: React.FC<CountUpProps> = ({ start = 0, end = 0, duration = 1000, prepend = "", append = "" }) => {
	const [count, setCount] = useState<number>(start)

	const value = useMemo(() => {
		const unitStr = verboseUnit(end)

		return `${prepend}${count}${unitStr || ""}${append}`
	}, [end, prepend, append, count])

	useEffect(() => {
		const scaledEnd = Number(end.toString().slice(0, 3))

		if (count < scaledEnd) {
			setTimeout(() => {
				setCount(count + 1)
			}, duration / (scaledEnd - start))
		}
	}, [start, end, duration, count])

	return <>{value}</>
}

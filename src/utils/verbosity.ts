export const verboseTimestamp = (seconds: number): string => {
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = Math.floor(seconds % 60)

	return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
}

export const verboseUnit = (count: number) => {
	const units = Math.floor(Math.log10(count)) + 1

	switch (units) {
		case 4:
			return "K"
		case 5:
			return "K"
		case 6:
			return "K"
		case 7:
			return "M"
		case 8:
			return "M"
		case 9:
			return "M"
		case 10:
			return "B"
	}
}

import beginAgain from "../assets/begin_again.mp3"
import neverLeave from "../assets/never_leave.mp3"
import opals from "../assets/opals.mp3"
import thePace from "../assets/the_pace.mp3"

export const PLAYER = {
	playing: false,
	track: 0,
	time: 0,
	tracks: [
		{
			title: "Opals - Catching Flies",
			src: opals
		},
		{
			title: "Never Leave - Helsloot",
			src: neverLeave
		},
		{
			title: "Begin Again - Ben Böhmer",
			src: beginAgain
		},
		{
			title: "The Pace - ford.",
			src: thePace
		}
	]
}

import { useEffect, useState } from "react"

export default function Clock() {
	const [clockState, setClockState] = useState();

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setClockState(date.toLocaleTimeString());
		}, 1000)
	}, [])

	return (
		<div>{clockState}</div>
	)
}
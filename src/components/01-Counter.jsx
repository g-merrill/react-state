import { useState } from "react"

export default function Counter() {
	const [count, setCount] = useState(0)

	const inc = () => {
		setCount(count + 1)
	}

	const dec = () => {
		setCount(count - 1)
	}

	return (
		<div>
			<h2>Counter</h2>
			<h3>{count}</h3>
			<div className="button-group">
				<button onClick={inc}>Increase</button>
				<button onClick={dec}>Decrease</button>
			</div>
		</div>
	)
}

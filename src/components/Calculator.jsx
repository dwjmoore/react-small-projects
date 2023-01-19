import { useState } from "react";

export default function Calculator() {
	const [display, setDisplay] = useState(0);

	const handleClick = (event) => {
		console.log(event.target.value);
	}

	return (
		<div className="calculator">
			<div className="calculatorDisplay">{display}</div>
			<div className="calculatorButtons">
				<button className="operator" onClick={handleClick} value={"÷"}>÷</button>
				<button className="operator" onClick={handleClick} value={"×"}>×</button>
				<button className="operator" onClick={handleClick} value={"-"}>-</button>
				<button className="operator" onClick={handleClick} value={"+"}>+</button>

				<button onClick={handleClick} value={7}>7</button>
				<button onClick={handleClick} value={8}>8</button>
				<button onClick={handleClick} value={9}>9</button>
				<button onClick={handleClick} value={4}>4</button>
				<button onClick={handleClick} value={5}>5</button>
				<button onClick={handleClick} value={6}>6</button>
				<button onClick={handleClick} value={1}>1</button>
				<button onClick={handleClick} value={2}>2</button>
				<button onClick={handleClick} value={3}>3</button>

				<button onClick={handleClick} value={0}>0</button>
				<button onClick={handleClick} value={"."}>.</button>
				<button className="allClear" onClick={handleClick} value={"AC"}>AC</button>

				<button className="equalSign" onClick={handleClick} value={"="}>=</button>
			</div>
		</div>
	)
}
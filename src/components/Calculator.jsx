import { useState } from "react";

export default function Calculator() {
	const [display, setDisplay] = useState("0");

	const handleClick = (event) => {

		if (display === "0" && !isNaN(event.target.textContent)) {
			setDisplay(event.target.textContent);
		} else if (!isNaN(event.target.textContent)) {
			setDisplay(display + event.target.textContent);
		}

		if (event.target.textContent === "." && !display.includes(".")) {
			setDisplay(display + event.target.textContent)
		}

		if (event.target.textContent === "AC") {
			setDisplay("0");
		}
		
	}

	return (
		<div className="calculator">
			<div className="calculatorDisplay">{display}</div>
			<div className="calculatorButtons">
				<button className="operator" onClick={handleClick}>÷</button>
				<button className="operator" onClick={handleClick}>×</button>
				<button className="operator" onClick={handleClick}>-</button>
				<button className="operator" onClick={handleClick}>+</button>

				<button onClick={handleClick}>7</button>
				<button onClick={handleClick}>8</button>
				<button onClick={handleClick}>9</button>
				<button onClick={handleClick}>4</button>
				<button onClick={handleClick}>5</button>
				<button onClick={handleClick}>6</button>
				<button onClick={handleClick}>1</button>
				<button onClick={handleClick}>2</button>
				<button onClick={handleClick}>3</button>

				<button onClick={handleClick}>0</button>
				<button onClick={handleClick}>.</button>
				<button className="allClear" onClick={handleClick}>AC</button>

				<button className="equalSign" onClick={handleClick}>=</button>
			</div>
		</div>
	)
}
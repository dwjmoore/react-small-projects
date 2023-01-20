// ---Display
// ---The number buttons
// ---All Clear
// Operators

import { useState } from "react";

export default function Calculator() {
	const [display, setDisplay] = useState("0");
	const [equationPartOne, setEquationPartOne] = useState(null);
	const [addOn, setAddOn] = useState(false);

	const handleNumbers = (event) => {
		if (display === "0") {
			setDisplay(event.target.textContent);
		} else {
			setDisplay(display + event.target.textContent);
		}

		if (addOn) {
			if (equationPartOne) {
				setDisplay(display + event.target.textContent);
			} else {
				setEquationPartOne(display);
				setDisplay(event.target.textContent);
			}
		}
	}

	const handleDecimal = (event) => {
		if (!display.includes(".")) {
			setDisplay(display + event.target.textContent)
		}
	}

	const handleAdd = () => {
		setAddOn(true);
	}

	const handleAllClear = () => {
		setDisplay("0");
		setEquationPartOne(null);
	}

	const handleEqualSign = () => {
		if (addOn) {
				setDisplay((Number(equationPartOne) + Number(display)).toString())
		}
	}

	return (
		<div className="calculator">
			<div className="calculatorDisplay">{display}</div>
			<div className="calculatorButtons">
				<button className="operator" onClick={handleAdd}>+</button>
				<button className="operator">-</button>
				<button className="operator">×</button>
				<button className="operator">÷</button>

				<button onClick={handleNumbers}>7</button>
				<button onClick={handleNumbers}>8</button>
				<button onClick={handleNumbers}>9</button>
				<button onClick={handleNumbers}>4</button>
				<button onClick={handleNumbers}>5</button>
				<button onClick={handleNumbers}>6</button>
				<button onClick={handleNumbers}>1</button>
				<button onClick={handleNumbers}>2</button>
				<button onClick={handleNumbers}>3</button>
				<button onClick={handleNumbers}>0</button>

				<button onClick={handleDecimal}>.</button>
				<button className="allClear" onClick={handleAllClear}>AC</button>

				<button className="equalSign" onClick={handleEqualSign}>=</button>
			</div>
		</div>
	)
}
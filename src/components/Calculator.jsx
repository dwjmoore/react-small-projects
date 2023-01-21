// xxxHitting numbers to show up on display.
// xxxAdding the decimal to a number on the display.
// xxxAll Clear
// add
// subtract
// multiply
// divide


import { useState } from "react";

export default function Calculator() {
	const [display, setDisplay] = useState("0");
	const [baseMemory, setBaseMemory] = useState(null);
	const [addMemory, setAddMemory] = useState(null);
	const [add, setAdd] = useState("OFF");

	const handleAdd = () => {
		if (add === "OFF") {
			setAdd("ON");
			setBaseMemory(display);
		}

		if (add === "ON") {
			setAddMemory(null);
		}
	}

	const handleNumbers = (event) => {
		if (display === "0") {
			setDisplay(event.target.textContent);
			return;
		}

		if (add === "ON" && !addMemory) {
			setDisplay(event.target.textContent);
			setAddMemory(event.target.textContent);
			return;
		}

		if (add === "ON" && addMemory) {
			setDisplay(display + event.target.textContent);
			setAddMemory(addMemory + event.target.textContent);
		}

		setDisplay(display + event.target.textContent);
	}

	const handleDecimal = (event) => {
		if (baseMemory && add === "ON" && !addMemory) {
			setDisplay("0" + event.target.textContent);
			setAddMemory("0" + event.target.textContent);
			return;
		}

		if (!display.includes(".")) {
			setDisplay(display + event.target.textContent);
			return;
		}
	}

	const handleAllClear = () => {
		setDisplay("0");
		setBaseMemory(null);
		setAddMemory(null);
		setAdd("OFF");
	}

	const handleEqualSign = () => {
		if (add === "ON" && addMemory) {
			setDisplay((Number(baseMemory) + Number(addMemory)).toString());
			setBaseMemory((Number(baseMemory) + Number(addMemory)).toString());
		}
	}

	return (
		<div>
			<h2>Add: {add}</h2>
			<h2>Base Memory: {baseMemory}</h2>
			<h2>Add Memory: {addMemory}</h2>
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
		</div>
	)
}
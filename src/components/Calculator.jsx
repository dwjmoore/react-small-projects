// xxxHitting numbers to show up on display.
// xxxAdding the decimal to a number on the display.
// xxxAll Clear
// xxxadd
// xxxsubtract
// multiply
// divide


import { useState } from "react";

export default function Calculator() {
	const [display, setDisplay] = useState("0");
	const [baseMemory, setBaseMemory] = useState(null);
	const [opMemory, setOpMemory] = useState(null);
	const [add, setAdd] = useState("OFF");
	const [subtract, setSubtract] = useState("OFF");
	const [multiply, setMultiply] = useState("OFF");
	const [equalClicked, setEqualClicked] = useState("NO");

	const handleAdd = () => {
		setSubtract("OFF");
		setMultiply("OFF");
		
		if (add === "OFF") {
			setAdd("ON");
			setBaseMemory(display);
		}

		if (equalClicked === "YES") {
			setEqualClicked("NO");
		}

		if (add === "ON" || subtract === "ON" || multiply === "ON") {
			setOpMemory(null);
		}

		if (equalClicked === "NO" && baseMemory && opMemory) {
			setDisplay((Number(baseMemory) + Number(opMemory)).toString());
			setBaseMemory((Number(baseMemory) + Number(opMemory)).toString());
			return;
		}

		if (equalClicked === "NO" && !baseMemory && opMemory) {
			setDisplay((Number(display) + Number(opMemory)).toString());
			setBaseMemory((Number(display) + Number(opMemory)).toString());
			return;
		}
	}

	const handleSubtract = () => {
		setAdd("OFF");
		setMultiply("OFF");
		
		if (subtract === "OFF") {
			setSubtract("ON");
			setBaseMemory(display);
		}

		if (equalClicked === "YES") {
			setEqualClicked("NO");
		}

		if (add === "ON" || subtract === "ON" || multiply === "ON") {
			setOpMemory(null);
		}

		if (equalClicked === "NO" && baseMemory && opMemory) {
			setDisplay((Number(baseMemory) + Number(opMemory)).toString());
			setBaseMemory((Number(baseMemory) + Number(opMemory)).toString());
			return;
		}

		if (equalClicked === "NO" && !baseMemory && opMemory) {
			setDisplay((Number(display) + Number(opMemory)).toString());
			setBaseMemory((Number(display) + Number(opMemory)).toString());
			return;
		}
	}

	const handleMultiply = () => {
		setAdd("OFF");
		setSubtract("OFF");
		
		if (multiply === "OFF") {
			setMultiply("ON");
			setBaseMemory(display);
		}

		if (equalClicked === "YES") {
			setEqualClicked("NO");
		}

		if (add === "ON" || subtract === "ON" || multiply === "ON") {
			setOpMemory(null);
		}

		if (equalClicked === "NO" && baseMemory && opMemory) {
			setDisplay((Number(baseMemory) + Number(opMemory)).toString());
			setBaseMemory((Number(baseMemory) + Number(opMemory)).toString());
			return;
		}

		if (equalClicked === "NO" && !baseMemory && opMemory) {
			setDisplay((Number(display) + Number(opMemory)).toString());
			setBaseMemory((Number(display) + Number(opMemory)).toString());
			return;
		}
	}

	const handleNumbers = (event) => {
		if (equalClicked === "YES") {
			setDisplay(event.target.textContent);
			setBaseMemory(null);
			setEqualClicked("NO");
			return;
		}

		if (display === "0") {
			setDisplay(event.target.textContent);
			return;
		}

		if ((add === "ON" || subtract === "ON" || multiply === "ON") && !opMemory) {
			setDisplay(event.target.textContent);
			setOpMemory(event.target.textContent);
			return;
		}

		if ((add === "ON" || subtract === "ON" || multiply === "ON") && opMemory) {
			setDisplay(display + event.target.textContent);
			setOpMemory(opMemory + event.target.textContent);
			return;
		}

		setDisplay(display + event.target.textContent);
	}

	const handleDecimal = (event) => {
		if (baseMemory && (add === "ON" || subtract === "ON" || multiply === "ON") && !opMemory) {
			setDisplay("0" + event.target.textContent);
			setOpMemory("0" + event.target.textContent);
			return;
		}

		if ((add === "ON" || subtract === "ON" || multiply === "ON") && opMemory && !display.includes(".")) {
			setDisplay(display + event.target.textContent);
			setOpMemory(opMemory + event.target.textContent);
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
		setOpMemory(null);
		setAdd("OFF");
		setSubtract("OFF");
		setMultiply("OFF");
		setEqualClicked("NO");
	}

	const handleEqualSign = () => {
		if (add === "ON" && !baseMemory && opMemory && equalClicked === "NO") {
			setDisplay((Number(display) + Number(opMemory)).toString());
			setBaseMemory((Number(display) + Number(opMemory)).toString());
			setEqualClicked("YES");
			return;
		}

		if (subtract === "ON" && !baseMemory && opMemory && equalClicked === "NO") {
			setDisplay((Number(display) - Number(opMemory)).toString());
			setBaseMemory((Number(display) - Number(opMemory)).toString());
			setEqualClicked("YES");
			return;
		}

		if (multiply === "ON" && !baseMemory && opMemory && equalClicked === "NO") {
			setDisplay((Number(display) * Number(opMemory)).toString());
			setBaseMemory((Number(display) * Number(opMemory)).toString());
			setEqualClicked("YES");
			return;
		}

		if (add === "ON" && opMemory) {
			setDisplay((Number(baseMemory) + Number(opMemory)).toString());
			setBaseMemory((Number(baseMemory) + Number(opMemory)).toString());
			setEqualClicked("YES");
			return;
		}

		if (subtract === "ON" && opMemory) {
			setDisplay((Number(baseMemory) - Number(opMemory)).toString());
			setBaseMemory((Number(baseMemory) - Number(opMemory)).toString());
			setEqualClicked("YES");
			return;
		}

		if (multiply === "ON" && opMemory) {
			setDisplay((Number(baseMemory) * Number(opMemory)).toString());
			setBaseMemory((Number(baseMemory) * Number(opMemory)).toString());
			setEqualClicked("YES");
			return;
		}
	}

	return (
		<div>
			<h2>Add: {add}</h2>
			<h2>Subtract: {subtract}</h2>
			<h2>Multiply: {multiply}</h2>
			<h2>Base Memory: {baseMemory}</h2>
			<h2>Op Memory: {opMemory}</h2>
			<h2>Equal Clicked: {equalClicked}</h2>
			<div className="calculator">
				<div className="calculatorDisplay">{display}</div>
				<div className="calculatorButtons">
					<button className="operator" onClick={handleAdd}>+</button>
					<button className="operator" onClick={handleSubtract}>-</button>
					<button className="operator" onClick={handleMultiply}>×</button>
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
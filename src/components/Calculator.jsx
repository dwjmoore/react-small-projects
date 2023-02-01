// still need to deal with number length and rounding errors

import { useState } from "react";

export default function Calculator() {
	const [display, setDisplay] = useState("0");
	const [baseMemory, setBaseMemory] = useState(null);
	const [opMemory, setOpMemory] = useState(null);
	const [add, setAdd] = useState("OFF");
	const [subtract, setSubtract] = useState("OFF");
	const [multiply, setMultiply] = useState("OFF");
	const [divide, setDivide] = useState("OFF");
	const [equalClicked, setEqualClicked] = useState("NO");

	const handleAdd = () => {
		setSubtract("OFF");
		setMultiply("OFF");
		setDivide("OFF");

		if (add === "OFF") {
			setAdd("ON");
			setBaseMemory(display);
		}

		if (equalClicked === "YES") {
			setEqualClicked("NO");
		}

		if (add === "ON" || subtract === "ON" || multiply === "ON" || divide === "ON") {
			setOpMemory(null);
		}

		if (equalClicked === "NO" && baseMemory && opMemory) {
			setDisplay(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			return;
		}

		if (equalClicked === "NO" && !baseMemory && opMemory) {
			setDisplay(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			return;
		}
	}

	const handleSubtract = () => {
		setAdd("OFF");
		setMultiply("OFF");
		setDivide("OFF");

		if (subtract === "OFF") {
			setSubtract("ON");
			setBaseMemory(display);
		}

		if (equalClicked === "YES") {
			setEqualClicked("NO");
		}

		if (add === "ON" || subtract === "ON" || multiply === "ON" || divide === "ON") {
			setOpMemory(null);
		}

		if (equalClicked === "NO" && baseMemory && opMemory) {
			setDisplay(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			return;
		}

		if (equalClicked === "NO" && !baseMemory && opMemory) {
			setDisplay(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			return;
		}
	}

	const handleMultiply = () => {
		setAdd("OFF");
		setSubtract("OFF");
		setDivide("OFF");

		if (multiply === "OFF") {
			setMultiply("ON");
			setBaseMemory(display);
		}

		if (equalClicked === "YES") {
			setEqualClicked("NO");
		}

		if (add === "ON" || subtract === "ON" || multiply === "ON" || divide === "ON") {
			setOpMemory(null);
		}

		if (equalClicked === "NO" && baseMemory && opMemory) {
			setDisplay(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			return;
		}

		if (equalClicked === "NO" && !baseMemory && opMemory) {
			setDisplay(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			return;
		}
	}

	const handleDivide = () => {
		setAdd("OFF");
		setSubtract("OFF");
		setMultiply("OFF");

		if (divide === "OFF") {
			setDivide("ON");
			setBaseMemory(display);
		}

		if (equalClicked === "YES") {
			setEqualClicked("NO");
		}

		if (add === "ON" || subtract === "ON" || multiply === "ON" || divide === "ON") {
			setOpMemory(null);
		}

		if (equalClicked === "NO" && baseMemory && opMemory) {
			setDisplay(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			return;
		}

		if (equalClicked === "NO" && !baseMemory && opMemory) {
			setDisplay(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
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

		if ((add === "ON" || subtract === "ON" || multiply === "ON" || divide === "ON") && !opMemory) {
			setDisplay(event.target.textContent);
			setOpMemory(event.target.textContent);
			return;
		}

		if ((add === "ON" || subtract === "ON" || multiply === "ON" || divide === "ON") && opMemory) {
			setDisplay(display + event.target.textContent);
			setOpMemory(opMemory + event.target.textContent);
			return;
		}

		setDisplay(display + event.target.textContent);
	}

	const handleDecimal = (event) => {
		if ((add === "ON" || subtract === "ON" || multiply === "ON" || divide === "ON") && baseMemory && !opMemory) {
			setDisplay("0" + event.target.textContent);
			setOpMemory("0" + event.target.textContent);
			return;
		}

		if ((add === "ON" || subtract === "ON" || multiply === "ON" || divide === "ON") && opMemory && !display.includes(".")) {
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
		setDivide("OFF");
		setEqualClicked("NO");
	}

	const handleEqualSign = () => {
		if (add === "ON" && !baseMemory && opMemory && equalClicked === "NO") {
			setDisplay(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(display) + Number(opMemory)).toFixed(7)).toString());
			setEqualClicked("YES");
			return;
		}

		if (subtract === "ON" && !baseMemory && opMemory && equalClicked === "NO") {
			setDisplay(parseFloat((Number(display) - Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(display) - Number(opMemory)).toFixed(7)).toString());
			setEqualClicked("YES");
			return;
		}

		if (multiply === "ON" && !baseMemory && opMemory && equalClicked === "NO") {
			setDisplay(parseFloat((Number(display) * Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(display) * Number(opMemory)).toFixed(7)).toString());
			setEqualClicked("YES");
			return;
		}

		if (divide === "ON" && !baseMemory && opMemory && equalClicked === "NO") {
			setDisplay(parseFloat((Number(display) / Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(display) / Number(opMemory)).toFixed(7)).toString());
			setEqualClicked("YES");
			return;
		}

		if (add === "ON" && opMemory) {
			setDisplay(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(baseMemory) + Number(opMemory)).toFixed(7)).toString());
			setEqualClicked("YES");
			return;
		}

		if (subtract === "ON" && opMemory) {
			setDisplay(parseFloat((Number(baseMemory) - Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(baseMemory) - Number(opMemory)).toFixed(7)).toString());
			setEqualClicked("YES");
			return;
		}

		if (multiply === "ON" && opMemory) {
			setDisplay(parseFloat((Number(baseMemory) * Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(baseMemory) * Number(opMemory)).toFixed(7)).toString());
			setEqualClicked("YES");
			return;
		}

		if (divide === "ON" && opMemory) {
			setDisplay(parseFloat((Number(baseMemory) / Number(opMemory)).toFixed(7)).toString());
			setBaseMemory(parseFloat((Number(baseMemory) / Number(opMemory)).toFixed(7)).toString());
			setEqualClicked("YES");
			return;
		}
	}

	return (
		<div className="calculator">
			<div className="calculatorDisplay">{display}</div>
			<div className="calculatorButtons">
				<button className="operator" onClick={handleAdd}>+</button>
				<button className="operator" onClick={handleSubtract}>-</button>
				<button className="operator" onClick={handleMultiply}>×</button>
				<button className="operator" onClick={handleDivide}>÷</button>

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
import { Outlet, Link } from "react-router-dom";

export default function Navigation() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/clock">Clock</Link>
				<Link to="/calculator">Calculator</Link>
			</nav>

			<Outlet />
		</div>
	)
}
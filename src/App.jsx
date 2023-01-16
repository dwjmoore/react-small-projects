import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Clock from './components/Clock';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NoPage from './components/NoPage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='calculator' element={<Calculator />} />
					<Route path='clock' element={<Clock />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
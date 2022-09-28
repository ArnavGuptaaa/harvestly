import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Alerts from './pages/Alerts';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/alerts" element={<Alerts />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
				<BottomNav />
			</Router>
		</div>
	);
}

export default App;

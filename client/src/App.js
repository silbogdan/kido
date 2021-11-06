import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SportScreen from './Screens/SportScreen';
import ShopScreen from './Screens/ShopScreen';
import FoodScreen from './Screens/FoodScreen';

function App() {
	return (
		<Router>
			<div className="App flex flex-col h-screen">
				<Header />
				{/* <ShopScreen /> */}
				<Routes>
					<Route exact path="/food" element={<FoodScreen />} />
					<Route exact path="/sport" element={<SportScreen />} />
					<Route exact path="/shop" element={<ShopScreen />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import SportScreen from './Screens/SportScreen';
import ShopScreen from './Screens/ShopScreen';
import FoodScreen from './Screens/FoodScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

function App() {

	return (
		<Router>
			<div className="App flex flex-col h-screen">
				<Routes>
					<Route exact path="/" element={<HomeScreen />} />
					<Route exact path="/login" element={<LoginScreen />} />
					<Route exact path="/register" element={<RegisterScreen />} />
					<Route exact path="/food" element={<FoodScreen />} />
					<Route exact path="/sport" element={<SportScreen />} />
					<Route exact path="/shop" element={<ShopScreen />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
	return (
		<div className="flex h-screen justify-center items-center gap-4">
			<div className="flex flex-col">
				<Link
					to="/login"
					className="bg-darkGreen text-white text-center text-xl py-4 px-10 my-1 border rounded-xl"
				>
					Login
				</Link>
				<Link
					to="/register"
					className="bg-orange text-white text-center text-xl py-4 px-10 my-1 border rounded-xl"
				>
					Register
				</Link>
			</div>
		</div>
	);
};

export default HomeScreen;

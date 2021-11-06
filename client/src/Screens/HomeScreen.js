import React from 'react';

const HomeScreen = () => {
	return (
		<div className="flex flex-col h-screen justify-center items-center gap-4">
			<Link
				to="/login"
				className="text-white text-center text-xl py-4 px-10 my-1 border rounded-xl"
			>
				Login
			</Link>
			<Link
				to="/register"
				className="text-white text-center text-xl py-4 px-10 my-1 border rounded-xl"
			>
				Register
			</Link>
		</div>
	);
};

export default HomeScreen;

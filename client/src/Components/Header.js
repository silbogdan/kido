import React, { useState } from 'react';
import StarSVG from '../Images/StarSVG';

const Header = ({ token }) => {
	// const [token, setToken] = useState(null);
	const [name, setName] = useState('Codrut');
	const [points, setPoints] = useState(100);

	return (
		<>
			<div className="py-4 grid grid-cols-2 gap-10 bg-darkPurple">
				<div className="text-center text-white text-xl">{name}</div>
				<div className="flex justify-center gap-3 text-center text-white text-xl">
					<span>{points}</span>
					<StarSVG width={32} height={30} />
				</div>
			</div>
		</>
	);
};

export default Header;

import React from 'react';
import FoodSVG from '../Images/FoodSVG';
import ShopSVG from '../Images/ShopSVG';
import SportSVG from '../Images/SportSVG';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className="bg-darkPurple py-4 px-10 grid grid-cols-3 gap-16">
				<Link
					to="/food"
					className="border rounded-xl flex justify-center p-3 items-center"
				>
					<FoodSVG />
				</Link>
				<Link
					to="/sport"
					className="border rounded-xl flex justify-center p-3 items-center"
				>
					<SportSVG />
				</Link>
				<Link
					to="/shop"
					className="border rounded-xl flex justify-center p-3 items-center"
				>
					<ShopSVG />
				</Link>
			</div>
		</>
	);
};

export default Footer;

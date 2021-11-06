import React from 'react';
import Card from '../Components/Card';

const ShopScreen = () => {
	const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	return (
		<div className="flex-grow px-3 py-4">
			<Card
				title="Zoo"
				description="mergem la zoo"
				points={50}
				color={Colors.random()}
				type={-1}
			/>
			<Card
				title="Cinema"
				description="mergem la filmul preferat"
				points={60}
				color={Colors.random()}
				type={-1}
			/>
			<Card
				title="Gaming"
				description="te las sa te joci lol"
				points={100}
				color={Colors.random()}
				type={-1}
			/>
			<Card
				title="Lego"
				description="iti cumpar un lego"
				points={200}
				color={Colors.random()}
				type={-1}
			/>
		</div>
	);
};

export default ShopScreen;

import React from 'react';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const SportScreen = () => {
	const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	return (
		<>
			<Header />
			<div className="flex-grow px-3 py-4">
				<Card
					title="10 genuflexiuni"
					description="timp de 10 min"
					points={20}
					color={Colors.random()}
					buy={'earn'}
				/>
				<Card
					title="10 abdomene"
					description="mars la sport"
					points={30}
					color={Colors.random()}
					buy={'earn'}
				/>
				<Card
					title="plimbare cu bicicleta"
					description="iesi afara in parc animalule"
					points={50}
					color={Colors.random()}
					buy={'earn'}
				/>
			</div>
			<Footer />
		</>
	);
};

export default SportScreen;

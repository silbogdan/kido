import React from 'react';
import FoodCard from '../Components/FoodCard';

const FoodScreenP = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    return (
        <div className="flex-grow px-3 py-4">
            <FoodCard
                title="Ciorba de vaca"
                description="Nu o chema milka, promit"
                points={15}
                color={Colors.random()}
                type={1}
            />
            <FoodCard
                title="Salata Caesar"
                description="Et tu Brutus?"
                points={10}
                color={Colors.random()}
                type={1}
            />

            <FoodCard
                title="Savarina"
                description="Desertul lu' Connect-R"
                points={15}
                color={Colors.random()}
                type={-1}
            />

        </div>

    );
};

export default FoodScreenP;

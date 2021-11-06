import React from 'react';
import FoodCard from '../Components/FoodCard';

const FoodScreen = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    return (
        <div className="flex-grow px-3 py-4">
            <FoodCard
                title="Adderall"
                description="Tragi pe nas"
                points={15}
                color={Colors.random()}
                type={1}
            />
            <FoodCard
                title="Adderall"
                description="Tragi pe nas"
                points={10}
                color={Colors.random()}
                type={1}
            />
            <FoodCard
                title="Adderall"
                description="Tragi pe nas"
                points={20}
                color={Colors.random()}
                type={1}
            />
            <FoodCard
                title="Savarina"
                description="Desert"
                points={15}
                color={Colors.random()}
                type={-1}
            />

        </div>

    );
};

export default FoodScreen;

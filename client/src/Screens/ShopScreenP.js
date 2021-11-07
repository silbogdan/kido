import React, { useState } from 'react';
import Card from '../Components/Card';

import ModalCard from '../Components/ModalCard';

const ShopScreenP = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];
    const [cardArray, setCardArray] = useState([{
        title: "Zoo",
        description: "mergem la zoo",
        points: 50,
    },
    {
        title: "Cinema",
        description: "mergem la cinema",
        points: 70,
    }]);


    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };


    const rewardsCallBack = (points, title) => {
        let newArray = [...cardArray, { title, points, description: "" }]
        setCardArray(newArray)
    }

    return (
        <div className="flex-grow px-3 py-4">
            <ModalCard
                title="Add New Reward!"
                description="Test"
                points={0}
                type_mod="Reward"
                color={'darkGreen'}
                type={-1}
                cb={rewardsCallBack}
            />
            {cardArray.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    points={card.points}
                    color={Colors.random()}
                    type={-1}
                />
            ))}

        </div>
    );
};

export default ShopScreenP;

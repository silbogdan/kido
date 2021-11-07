import React, { useState } from 'react';
import Card from '../Components/Card';
import ModalCard from '../Components/ModalCard';

const SportScreenP = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];

    const [cardArray, setCardArray] = useState([{
        title: "Genoflexiuni",
        description: "10 Repetari",
        points: 50,
    },
    {
        title: "Alergat",
        description: "30 Minute in parc",
        points: 70,
    }])

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    const rewardsCallBack = (points, title, description) => {
        let newArray = [...cardArray, { title, points, description }]
        setCardArray(newArray)
    }

    return (
        <div className="flex-grow px-3 py-4">
            <ModalCard
                title="Add New Activity!"
                description="Test"
                type_mod="Activity"
                points={0}
                color={'darkGreen'}
                type={1}
                cb={rewardsCallBack}
            />
            {cardArray.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    points={card.points}
                    color={Colors.random()}
                    type={1}
                />
            ))}
        </div>
    );
};

export default SportScreenP;

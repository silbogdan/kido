import React from 'react';
import Card from '../Components/Card';
import ModalCard from '../Components/ModalCard';

const SportScreenP = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    return (
        <div className="flex-grow px-3 py-4">
            <ModalCard
                
            />
            <Card
                title="10 genuflexiuni"
                description="timp de 10 min"
                points={20}
                color={Colors.random()}
                buy={'earn'}
            />
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
    );
};

export default SportScreenP;

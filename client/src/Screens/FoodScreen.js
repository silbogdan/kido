import React from 'react';
import Card from '../Components/Card';


import Header from '../Components/Header'
import Footer from '../Components/Footer'

const FoodScreenP = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    return (
        <>
            <Header></Header>
            <div className="flex-grow px-3 py-4">
                <Card
                    title="Ciorba de vaca"
                    description="Nu o chema milka, promit"
                    points={15}
                    color={Colors.random()}
                    type={1}
                />
                <Card
                    title="Salata Caesar"
                    description="Et tu Brutus?"
                    points={10}
                    color={Colors.random()}
                    type={1}
                />
                <Card
                    title="Savarina"
                    description="Desertul lu' Connect-R"
                    points={15}
                    color={Colors.random()}
                    type={-1}
                />

            </div>
            <Footer></Footer>
        </>


    );
};

export default FoodScreenP;

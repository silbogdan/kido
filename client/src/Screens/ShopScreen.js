import React, { useState } from 'react';
import Card from '../Components/Card';
import ModalCard from '../Components/ModalCard';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import JWT from 'jsonwebtoken'
import axios from 'axios'

require('dotenv').config();

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


    const rewardsCallBack = (points, title, description) => {
        let newArray = [...cardArray, { title, points, description }]
        setCardArray(newArray)
    }

    return (
        <>
            <Header></Header>
            <div className="flex-grow px-3 py-4">
                {/* #TODO To be fixed later */}
                {JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.role === 'child' ? '' :
                    <ModalCard
                        title="Add New Reward!"
                        description="Test"
                        type_mod="Reward"
                        points={0}
                        color={'darkGreen'}
                        type={1}
                        cb={rewardsCallBack}
                    />
                }
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
            <Footer></Footer>
        </>

    );
};

export default ShopScreenP;

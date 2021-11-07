import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import ModalCard from '../Components/ModalCard';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import JWT from 'jsonwebtoken'
require('dotenv').config();

const SportScreenP = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];
    const [jwt_dict, setJWT_DICT] = useState({});
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


    useEffect(() => {
    }, [])

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    const rewardsCallBack = (points, title, description) => {
        let newArray = [...cardArray, { title, points, description }]
        setCardArray(newArray)
    }

    return (
        <>
            <Header />
            <div className="flex-grow px-3 py-4">
                {/* #TODO To be fixed later */}
                {JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.role === 'child' ? '' :
                    <ModalCard
                        title="Add New Activity!"
                        description="Test"
                        type_mod="Activity"
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
                        type={1}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default SportScreenP;

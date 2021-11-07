import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import ModalCard from '../Components/ModalCard';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import JWT from 'jsonwebtoken';
import axios from 'axios';

const FoodScreenP = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];

    const [cardArray, setCardArray] = useState([{}]);

    const token = JSON.parse(localStorage.getItem('token'))['token'];

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    const rewardsCallBack = (points, title) => {
        let newArray = [...cardArray, { title, points, description: "" }]
        setCardArray(newArray)
    }

    useEffect(() => {

        let config = {
            method: 'get',
            url: 'http://localhost:5000/user/getFood',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };


        axios(config).then(res => {
            const activities = res.data;
            setCardArray(activities);
        })
    }, [])

    return (
        <>
            <Header></Header>
            <div className="flex-grow px-3 py-4">
            {JWT.verify(token, process.env.REACT_APP_JWT_SECRET).user.role === 'child' ? '' :
                    <ModalCard
                        title="Add New Food!"
                        description="Test"
                        type_mod="Food"
                        points={0}
                        color={'darkGreen'}
                        type={1}
                        cb={rewardsCallBack}
                    />
                }
                {cardArray.map((card, index) => (
                    <Card
                        key={index}
                        title={card.name}
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

export default FoodScreenP;

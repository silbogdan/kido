import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import ModalCard from '../Components/ModalCard';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import JWT from 'jsonwebtoken'
import axios from 'axios';
require('dotenv').config();

const SportScreenP = () => {
    const Colors = ['orange', 'yellow', 'lightGreen', 'darkGreen'];
    const [jwt_dict, setJWT_DICT] = useState({});
    const [cardArray, setCardArray] = useState([])


    useEffect(() => {
        var data = JSON.stringify({
            "username": JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.username
        });

        let config = {
            method: 'get',
            url: 'http://localhost:5000/user/getActivities',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: data,
        };


        axios.get('http://localhost:5000/user/getActivities').then(res => {
            const activities = res.data;
            setCardArray(activities);
        })
    }, [])

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    const rewardsCallBack = (points, title, description) => {

        let newArray = [...cardArray, { title, points, description }]
        setCardArray(newArray)

        let data = {
            name: title,
            description,
            points
        };

        let config = {
            method: 'post',
            url: 'http://localhost:5000/user/addActivity',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

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

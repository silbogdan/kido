import React, { useState, useEffect } from 'react';
import StarSVG from '../Images/StarSVG';
import JWT from 'jsonwebtoken'
require('dotenv').config();

const Header = ({ token }) => {
    // const [token, setToken] = useState(null);
    const [name, setName] = useState('Codrut');
    const [points, setPoints] = useState(100);

    useEffect(() => {
        setName(JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.firstName)
        //setPoints(JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.points)
    }, [])
    return (
        <>
            <div className="py-4 grid grid-cols-2 gap-10 bg-darkPurple">
                <div className="text-center text-white text-xl">{name}</div>
                <div className="flex justify-center gap-3 text-center text-white text-xl">
                    <span>{points}</span>
                    <StarSVG width={32} height={30} />
                </div>
            </div>
        </>
    );
};

export default Header;

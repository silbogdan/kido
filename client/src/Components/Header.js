import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StarSVG from '../Images/StarSVG';
import logoutSVG from '../Images/logoutSVG';
import JWT from 'jsonwebtoken'
require('dotenv').config();

const Header = ({ token }) => {
    // const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [points, setPoints] = useState(100);
    const [role, setRole] = useState('');

    useEffect(() => {
        setName(JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.firstName)
        //setPoints(JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.points)
        setRole(JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.role)

    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    console.log(JWT.verify(JSON.parse(localStorage.getItem('token')).token, process.env.REACT_APP_JWT_SECRET).user.role);

    return (
        <>
            <div className="py-4 grid grid-cols-2 gap-10 bg-darkPurple">
                <div className="grid grid-cols-2">

                    <div onClick={handleLogout} className="text-center text-white border rounded-full">L</div>
                    <div className="text-center text-white text-xl">{name}</div>
                </div>


                {role === 'child' ?
                    <div className="flex justify-center gap-3 text-center text-white text-xl">
                        <span>{points}</span>
                        <StarSVG width={32} height={30} />
                    </div> :
                    <div className="flex justify-center gap-3 text-center text-white text-xl" onClick={() => navigate('/refcode')}>
                        add child
                    </div>}

            </div>
        </>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddChildScreen = () => {
    const [refCode, setRefCode] = useState('');

    const token = JSON.parse(localStorage.getItem('token'))['token'];

    const fetchData = async () => {
        var axios = require('axios');

    var config = {
        method: 'get',
        url: 'http://localhost:5000/user',
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    };

    axios(config)
    .then(function (response) {
        setRefCode(JSON.stringify(response.data.code))
    })
    .catch(function (error) {
        console.log(error);
    });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex-grow px-3 py-4">
            {refCode}
            <Link to="/food">Cancel</Link>
        </div>
    )
};

export default AddChildScreen;
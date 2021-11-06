import React, { useState } from 'react';

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="flex flex-col gap-3 flex-grow justify-center items-center">
            <div>
                <div className="flex flex-col py-3 gap-1">
                    <label htmlFor="" className="text-white text-xl">
                        First Name
                    </label>
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        className="text-white bg-transparent border-b"
                    />
                </div>

                <div className="flex flex-col py-3 gap-1">
                    <label htmlFor="" className="text-white text-xl">
                        Last Name
                    </label>
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        className="text-white bg-transparent border-b"
                    />
                </div>

                <div className="flex flex-col py-3 gap-1">
                    <label htmlFor="" className="text-white text-xl">
                        Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="text-white bg-transparent border-b"
                    />
                </div>

                <div className="flex flex-col py-3 gap-1">
                    <label htmlFor="" className="text-white text-xl">
                        Password
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="text-white bg-transparent border-b"
                    />
                </div>

                <div className="flex flex-col py-3 gap-1">
                    <label htmlFor="" className="text-white text-xl">
                        Confirm Password
                    </label>
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        className="text-white bg-transparent border-b"
                    />
                </div>

                <div className="flex py-3 justify-between">
                    <label className="text-xl text-white" htmlFor="">
                        Role
                    </label>
                    <select
                        className="text-white text-lg bg-transparent"
                        name="role"
                        id=""
                    >
                        <option value="parent">Parent</option>
                        <option value="child">Child</option>
                    </select>
                </div>
            </div>
            <div className="bg-darkGreen p-3 text-white text-xl border rounded-xl">
                Submit
            </div>
        </div>
    );
};

export default RegisterScreen;

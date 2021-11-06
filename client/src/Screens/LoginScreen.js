import React, { useState } from 'react';

//firt last email rol

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    return (
        <div className="flex flex-col gap-3 flex-grow justify-center items-center">
            <div>
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
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        className="text-white bg-transparent border-b"
                    />
                </div>
            </div>
            <button className="btn bg-darkGreen p-3 text-white text-xl border rounded-xl">
                Submit
            </button>
        </div>
    );
};

export default LoginScreen;

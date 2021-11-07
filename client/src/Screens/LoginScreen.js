import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = {
			username: email,
			password,
		};

		let config = {
			method: 'post',
			url: 'http://localhost:5000/auth/login',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		};

		axios(config)
			.then(function (response) {
				let token = JSON.stringify(response.data);
				console.log(JSON.stringify(response.data));
				localStorage.setItem('token', token);
				navigate('/shop');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className="flex flex-col gap-3 flex-grow justify-center items-center">
			<form onSubmit={handleSubmit}>
				<div>
					<div className="flex flex-col py-3 gap-1">
						<label htmlFor="username" className="text-white text-xl">
							Email / Username
						</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							className="text-white bg-transparent border-b"
						/>
					</div>

					<div className="flex flex-col py-3 gap-1">
						<label htmlFor="password" className="text-white text-xl">
							Password
						</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							className="text-white bg-transparent border-b"
						/>
					</div>
				</div>
				<button className="btn bg-darkGreen p-3 text-white text-xl border rounded-xl">
					Submit
				</button>
				<Link to="/" className="btn bg-orange p-3 ml-5 text-white text-xl border rounded-xl">
					Cancel
				</Link>
			</form>
		</div>
	);
};

export default LoginScreen;

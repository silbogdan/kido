import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterScreen = ({ history }) => {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('parent');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		let data = {
			firstName,
			lastName,
			username,
			email,
			password,
		};

		let config = {
			method: 'post',
			url: 'http://localhost:5000/auth/register',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				navigate('/shop');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleChangeRole = (e) => {
		setRole(e.target.value);
	};

	return (
		<div className="flex flex-col gap-3 flex-grow justify-center items-center">
			<form onSubmit={handleSubmit}>
				<div>
					<div className="flex justify-between py-3 gap-1">
						<label htmlFor="role" className="text-white text-xl">
							Role
						</label>
						<select
							onChange={handleChangeRole}
							className="text-white bg-transparent"
							name=""
							id=""
						>
							<option value="parent">Parent</option>
							<option value="child">Child</option>
						</select>
					</div>
					{role === 'parent' ? (
						<>
							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="firstName" className="text-white text-xl">
									First Name
								</label>
								<input
									onChange={(e) => setFirstName(e.target.value)}
									type="text"
									className="text-white bg-transparent border-b"
								/>
							</div>

							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="lastName" className="text-white text-xl">
									Last Name
								</label>
								<input
									onChange={(e) => setLastName(e.target.value)}
									type="text"
									className="text-white bg-transparent border-b"
								/>
							</div>

							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="username" className="text-white text-xl">
									Username
								</label>
								<input
									onChange={(e) => setUsername(e.target.value)}
									type="text"
									className="text-white bg-transparent border-b"
								/>
							</div>

							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="email" className="text-white text-xl">
									Email
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

							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="confirm" className="text-white text-xl">
									Confirm Password
								</label>
								<input
									onChange={(e) => setConfirmPassword(e.target.value)}
									type="password"
									className="text-white bg-transparent border-b"
								/>
							</div>
						</>
					) : (
						<>
							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="firstName" className="text-white text-xl">
									First Name
								</label>
								<input
									onChange={(e) => setFirstName(e.target.value)}
									type="text"
									className="text-white bg-transparent border-b"
								/>
							</div>

							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="lastName" className="text-white text-xl">
									Last Name
								</label>
								<input
									onChange={(e) => setLastName(e.target.value)}
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

							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="confirm" className="text-white text-xl">
									Confirm Password
								</label>
								<input
									onChange={(e) => setConfirmPassword(e.target.value)}
									type="password"
									className="text-white bg-transparent border-b"
								/>
							</div>

							<div className="flex flex-col py-3 gap-1">
								<label htmlFor="genId" className="text-lightGreen text-xl">
									Parent ID
								</label>
								<input
									onChange={(e) => setConfirmPassword(e.target.value)}
									type="text"
									className="text-lightGreen bg-transparent border-b border-lightGreen"
								/>
							</div>
						</>
					)}
				</div>
				<button className="bg-darkGreen p-3 text-white text-xl border rounded-xl">
					Submit
				</button>
			</form>
		</div>
	);
};

export default RegisterScreen;

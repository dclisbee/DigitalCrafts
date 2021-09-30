import React from "react";
import { useState } from "react";
import DB from "./DB";

function Signup() {
	const [user, setUser] = useState("");
	const [userInfo, setUserInfo] = useState([]);
	// const res = Object.keys(userInfo).reduce((user, [e.target.name]))
	// const [allUsers, setAllUsers] = useState({});
	console.log(userInfo);
	return (
		<div>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="text"
				placeholder="First Name"
				name="firstName"
			/>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="text"
				placeholder="Last Name"
				name="lastName"
			/>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="date"
				placeholder="Date of Birth"
				name="dob"
			/>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="text"
				placeholder="Address"
				name="address"
			/>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="text"
				placeholder="City"
				name="city"
			/>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="text"
				placeholder="State"
				name="state"
			/>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="text"
				placeholder="Zip Code"
				name="zipCode"
			/>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="text"
				placeholder="Username"
				name="username"
			/>
			<input
				onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
				type="text"
				placeholder="Email"
				name="email"
			/>
			<button onClick={() => setUserInfo([...userInfo, user])}>Sign Up</button>

			<DB list={userInfo} />
		</div>
	);
}
export default Signup;

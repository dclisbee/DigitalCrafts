import React from "react";
import { useState } from "react";

function Signup(props) {
	const [info, setInfo] = useState({});
	const { allInfo, setAllInfo } = props;

	return (
		<div className="formBox">
			<form className="signup" action="">
				<input
					type="text"
					value={info?.firstName}
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="firstName"
					placeholder="First Name"
				></input>
				<input
					type="text"
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="lastName"
					placeholder="Last Name"
				></input>
				<input
					type="date"
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="DOB"
					placeholder="Date of Birth"
				></input>
				<input
					type="text"
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="address"
					placeholder="Street Address"
				></input>
				<input
					type="text"
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="city"
					placeholder="City"
				></input>
				<input
					type="text"
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="state"
					placeholder="State"
				></input>
				<input
					type="text"
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="zipcode"
					placeholder="Zip Code"
				></input>
				<input
					type="text"
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="userName"
					placeholder="User Name"
				></input>
				<input
					type="text"
					onChange={(e) =>
						setInfo({ ...info, [e.target.name]: e.target.value })
					}
					name="email"
					placeholder="Email"
				></input>
				<input
					type="button"
					value="Signup"
					onClick={(e) => setAllInfo([...allInfo, info])}
				></input>
			</form>
		</div>
	);
}

export default Signup;

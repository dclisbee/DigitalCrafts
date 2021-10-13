import React from "react";
import "./SignupStyles.css";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";
import { createUserLogin } from "./Functions";
export default function SignupForm() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state);
	const counter = useSelector((state) => state.counterData);
	return (
		<div className="signupForm">
			<form action="">
				<input
					onChange={(e) =>
						debounce(
							() => dispatch({ type: "FIRSTNAME", value: e.targetvalue }),
							3000
						)
					}
					type="text"
					placeholder="FirstName"
				/>
				<input
					onChange={(e) => dispatch({ type: "LASTNAME", value: e.targetvalue })}
					type="text"
					placeholder="LastName"
				/>
				<input
					onChange={(e) => dispatch({ type: "EMAIL", value: e.targetvalue })}
					type="text"
					placeholder="Email"
				/>
				<input
					onChange={(e) => dispatch({ type: "PASSWORD", value: e.targetvalue })}
					type="text"
					placeholder="Password"
				/>
				<input type="submit" onClick={(e) => createUserLogin(e, user)} />
			</form>
			{counter}
			<button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>
				Increment
			</button>
			<button>Decrement</button>
		</div>
	);
}

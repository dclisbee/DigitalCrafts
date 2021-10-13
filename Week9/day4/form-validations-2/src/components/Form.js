import React, { useState } from "react";
import { FormStyled, FormDiv, FormIn } from "../styled/FormStyle";
import { createClient } from "@supabase/supabase-js";
import { useHistory } from "react-router-dom";

// Create a single supabase client for interacting with your database
const supabase = createClient(
	"https://pzztkkjffgageidebrov.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNDMwNSwiZXhwIjoxOTQ2NzgwMzA1fQ.8kYKNI94u9NzoQL01LfA_oD2XlNB1yXlAMywQtsbiI4"
);

export default function Form(props) {
	const [formData, setFormData] = useState({ username: "", password: "" });
	console.log(formData);
	const history = useHistory();

	const login = async (e) => {
		e.preventDefault();

		const { user, session, error } = await supabase.auth.signIn({
			email: formData.username,
			password: formData.password,
		});
		if (session) {
			history.push("/dashboard");
		} else {
			alert(error.message);
		}
	};

	const register = async (e) => {
		e.preventDefault();
		const { user, session, error } = await supabase.auth.signUp({
			email: formData.username,
			password: formData.password,
		});
		if (user) {
			history.push("/login");
		} else {
			alert(error.message);
		}
	};

	return (
		<FormDiv>
			<FormStyled>
				<FormIn
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					type="text"
					placeholder="username"
					name="username"
					value={formData?.username}
				/>
				<FormIn
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					type="password"
					placeholder="password"
					name="password"
					value={formData?.password}
				/>
				{props?.register ? (
					<button onClick={(e) => register(e)}>Register</button>
				) : (
					<button onClick={(e) => login(e)}>Login</button>
				)}
			</FormStyled>
		</FormDiv>
	);
}

import React, { useState } from "react";
import { FormStyled, FormDiv, FormIn } from "../styled/FormStyle";

export default function Form() {
	const [formData, setFormData] = useState({});

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
					type="text"
					placeholder="email"
					name="email"
					value={formData?.email}
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
				<div>
					<FormIn type="submit" />
				</div>
			</FormStyled>
		</FormDiv>
	);
}

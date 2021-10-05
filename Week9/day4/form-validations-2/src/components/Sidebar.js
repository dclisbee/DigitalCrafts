import React from "react";
import { IMG, SidebarStyle, P } from "../styled/SidebarStyled";
import { Link } from "react-router-dom";
export default function Sidebar() {
	return (
		<SidebarStyle>
			<P>
				<IMG
					src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
					alt=""
				></IMG>
				<P>
					<Link to="/dashboard">Dashboard</Link>
				</P>
				<P>
					<Link to="/form">Form</Link>
				</P>
				<P>
					<Link to="/garage">Garage</Link>
				</P>
				<P>
					<Link to="/account">Account</Link>
				</P>
				<P>
					<Link to="/">Home</Link>
				</P>
			</P>
		</SidebarStyle>
	);
}

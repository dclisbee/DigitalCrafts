import React from "react";
import { IMG, SidebarStyle } from "../styled/SidebarStyled";

export default function Sidebar() {
	return (
		<SidebarStyle>
			<IMG
				src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
				alt=""
			></IMG>
			<p>Welcome Dustin</p>
		</SidebarStyle>
	);
}

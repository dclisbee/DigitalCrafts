import React from "react";
import {
	SidebarLink,
	SidebarLinkContainer,
	IconContainer,
} from "../styled/SidebarStyled";
import { IconContext } from "react-icons";

export default function SidebarLinks(props) {
	const Icon = props?.linkData?.icon;

	return (
		<SidebarLinkContainer>
			<IconContainer>
				<IconContext.Provider value={{ color: "white", size: "1.5em" }}>
					<Icon />
				</IconContext.Provider>
			</IconContainer>
			<SidebarLink to={props.linkData.path}>{props.linkData.name}</SidebarLink>
		</SidebarLinkContainer>
	);
}

import React from "react";
import { IMG, SidebarStyle, P } from "../styled/SidebarStyled";
import { Link } from "react-router-dom";
import { sidebardata } from "./SidebarLinksData.js";
import SidebarLinks from "./SidebarLinks";

export default function Sidebar(props) {
	const viewSidebar = props.viewSidebar;

	return (
		<>
			{viewSidebar ? (
				<SidebarStyle>
					{sidebardata?.map((linkData, index) => (
						<SidebarLinks key={index} linkData={linkData} />
					))}
				</SidebarStyle>
			) : (
				<></>
			)}
		</>
	);
}

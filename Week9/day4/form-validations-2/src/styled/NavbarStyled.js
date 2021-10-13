// import styled from "styled-components";

// export const Navbar = styled.div`
// 	background-color: green;
// 	color: aquamarine;
// 	text-align: center;
// 	height: 75px;
// 	padding: 0px;
// 	margin: 0px;
// `;

import styled from "styled-components";

export const HeaderContainer = styled.div`
	background-color: #424c58;
	grid-area: header;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;

export const UserButton = styled.button`
	padding: 0.5em;
	border: none;
	background-color: hsl(173, 60%, 50%);
	color: #efebe0;
	font-size: 1rem;
	border-radius: 13px;
	width: 5rem;
	&:active {
		background-color: hsl(173, 60%, 40%);
		box-shadow: 0 2px #666;
		transform: translateY(1px);
	}
`;

export const UserPicture = styled.img`
	border-radius: 50%;
	height: 60px;
	width: 60px;
`;

export const HeaderHeader = styled.h1`
	color: #fb6b90;
	font-family: "Roboto", sans-serif;
`;

export const HeaderItem = styled.div`
	color: #efebe0;
	font-size: 1.2em;
	margin: 1rem;
`;

export const RightHeaderItems = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const LeftHeaderItems = styled.div`
	margin-left: 4rem;
	border: 1.2px solid white;
	padding: 0.2rem;
	border-radius: 3px;
`;

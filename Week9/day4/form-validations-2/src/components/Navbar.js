// import React, { useEffect, useState } from "react";
// import { Navbar } from "../styled/NavbarStyled";
// import { useDispatch } from "react-redux";
// const URL = "https://randomuser.me/api/";

// export default function NavbarComplete(props) {
// 	const viewSidebar = props.viewSidebar;
// 	const setViewSidebar = props.setViewSidebar;
// 	const [counter, setCounter] = useState(0);
// 	const dispatch = useDispatch();
// 	// const user = useSelector((state) => state);

// 	useEffect(() => {
// 		const getNewsData = async () => {
// 			const getTheNews = await fetch(URL, {
// 				method: "GET",
// 				cache: "no-cache",
// 				credentials: "same-origin",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			});
// 			const jsonNews = await getTheNews.json();
// 			console.log(jsonNews);
// 			dispatch({
// 				type: "GET_USER",
// 				payload: { ...jsonNews.results[0] },

// 				// userImage: jsonNews?.results[0]?.picture?.thumbnail,
// 			});
// 		};
// 		getNewsData();
// 		return () => {};
// 	}, [counter]);

// 	return (
// 		<Navbar class="navbar">
// 			<h1>The Project</h1>
// 			{/* <img src={user?.picture?.large} alt="" /> */}
// 			<p>{/* Welcome {user?.name?.first} {""} {user?.name?.last} */}</p>
// 			<button
// 				onClick={() => dispatch({ type: "SET_USERNAME", payload: "Stuff" })}
// 			>
// 				User Button
// 			</button>
// 		</Navbar>
// 	);
// }

import React, { useEffect, useState } from "react";
import {
	UserButton,
	HeaderItem,
	HeaderContainer,
	UserPicture,
	RightHeaderItems,
	LeftHeaderItems,
} from "../styled/NavbarStyled";
import { IconContext } from "react-icons";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

const URL = "https://randomuser.me/api/";

export default function Header(props) {
	const viewSidebar = props.viewSidebar;
	const setViewSidebar = props.setViewSidebar;
	const [counter, setCounter] = useState(0);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userData.userData);
	// useEffect is a hook
	// hook that fires when the component is mounted
	useEffect(() => {
		const getNewsData = async () => {
			const getTheNews = await fetch(URL, {
				method: "GET",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const jsonNews = await getTheNews.json();

			dispatch({
				type: "GET_USER",
				payload: { ...jsonNews.results[0] },
			});
		};

		getNewsData();
		return () => {};
	}, [counter, dispatch]);

	// useEffect(()=>{}) fire when we mount and anytime we call useState

	// useEffect(()=>{},[]) fire when we mount and only when we mount

	// useEffect(()=>{},[variable]) fire when we mount and only when when variable changes in value
	return (
		<HeaderContainer>
			<LeftHeaderItems>
				<IconContext.Provider value={{ color: "white", size: "2em" }}>
					{viewSidebar ? (
						<RiMenuUnfoldLine onClick={() => setViewSidebar(!viewSidebar)} />
					) : (
						<GiHamburgerMenu onClick={() => setViewSidebar(!viewSidebar)} />
					)}
				</IconContext.Provider>
			</LeftHeaderItems>
			<RightHeaderItems>
				<HeaderItem>
					<UserButton onClick={() => setCounter(counter + 1)}>
						Get New User
					</UserButton>
				</HeaderItem>
				<HeaderItem>
					<p>
						Welcome {user?.name?.first} {""} {user?.name?.last}
					</p>
				</HeaderItem>
				<HeaderItem>
					<UserPicture src={user?.picture?.large} alt="" />
				</HeaderItem>
			</RightHeaderItems>
		</HeaderContainer>
	);
}

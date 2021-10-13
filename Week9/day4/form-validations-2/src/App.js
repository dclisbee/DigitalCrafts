import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Garage from "./components/Garage";
import { useState } from "react";
import ErrorPage from "./components/ErrorPage";

import { NavbarContainer, MainCon } from "./styled/AppStyle";
import Account from "./components/Account";
import "./styled/app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	const register = true;
	const [viewSidebar, setViewSidebar] = useState(true);

	const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
	console.log({ user });
	return (
		<Router>
			<Switch>
				{user ? (
					<>
						<Route path="/register">
							<Form register={register} />
						</Route>
						<MainCon>
							<Navbar />
							<NavbarContainer
								className="App"
								viewSidebar={viewSidebar}
								setViewSidebar={setViewSidebar}
							>
								<Sidebar viewSidebar={viewSidebar} />
								<Route exact path="/">
									<Home />
								</Route>
								<Route path="/dashboard">
									<Dashboard />
								</Route>
								<Route path="/garage">
									<Garage />
								</Route>
								<Route path="/account">
									<Account />
								</Route>
								<Route path="/errorpage">
									<ErrorPage />
								</Route>
							</NavbarContainer>
						</MainCon>{" "}
					</>
				) : (
					<Route path="/login">
						<Form />
					</Route>
				)}
			</Switch>
		</Router>
	);
}

export default App;

import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Garage from "./components/Garage";
import { NavbarContainer, MainCon } from "./styled/AppStyle";
import Account from "./components/Account";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Switch>
				<MainCon>
					<Navbar />
					<NavbarContainer className="App">
						<Sidebar />
						<Route path="/form">
							<Form />
						</Route>
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
					</NavbarContainer>
				</MainCon>
			</Switch>
		</Router>
	);
}

export default App;

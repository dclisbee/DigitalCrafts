import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./components/PageNotFound";

import "./App.css";
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home className="home" />
				</Route>
				<Route exact path="/search">
					<Search />
				</Route>
				<Route exact path="/watchlist">
					<Watchlist />
				</Route>
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	);
}

export default App;

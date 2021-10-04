import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { NavbarContainer } from "./styled/AppStyle";

function App() {
	return (
		<NavbarContainer className="App">
			<div>
				<Navbar />
			</div>
			<div>
				<Sidebar />
				<Form />
			</div>
		</NavbarContainer>
	);
}

export default App;

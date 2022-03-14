import React from "react";
import TodoComponent from "./todoComponent.jsx";
import Fetch from "./fetch.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<TodoComponent />
			<Fetch />
		</div>
	);
};

export default Home;

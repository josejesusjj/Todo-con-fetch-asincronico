import React, { useEffect, useState } from "react";

const Fetch = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://gorest.co.in/public/v2/users")
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setUsers(result.name);
			});
	}, []);

	return (
		<div>
			<h1>Users</h1>
			<ul>{users}</ul>
		</div>
	);
};

export default Fetch;

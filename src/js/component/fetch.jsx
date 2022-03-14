import React, { useEffect, useState } from "react";

const Fetch = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://gorest.co.in/public/v2/users")
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setUsers(result);
			});
	}, []);

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((value, index) => {
					<li key={index}>{value.email}</li>;
				})}
			</ul>
		</div>
	);
};

export default Fetch;

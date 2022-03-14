fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });

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
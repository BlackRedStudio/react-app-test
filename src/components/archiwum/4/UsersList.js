import React from 'react';

const UsersList = props => {
	const users = props.users.map((user, key) => (
		<div key={key}>
			<h4>{`${user.name.title} ${user.name.last}`}</h4>
			<p>Email: {user.email}</p>
		</div>
	))
	return(
		<ul>
			{users}
		</ul>
	)
}

export default UsersList;
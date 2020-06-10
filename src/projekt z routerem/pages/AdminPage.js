import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = false;

const AdminPage = () => {
	return(
		<Route render={() => {
			if(permission) {
				return (
					<h3>Panel admin - dzień dobry</h3>
				)
			} else {
				return (
					<Redirect to="/login" />
				)
			}
		}}/>
	)
}

export default AdminPage;
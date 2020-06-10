import React, {Component, Fragment} from 'react';
import './App.css';
import ButtonFetchUser from './ButtonFetchUser';
import UsersList from './UsersList';

const API = 'https://randomuser.me/api/?results=1';

class App extends Component {
	state = {
		users: []
	}
	handleDataFetch = () => {
		fetch(API)
		.then(res => {
			if(res.ok)
				return res;
			throw Error(res.status)
		})
		.then(res => res.json())
		.then(data => {
			const user = data.results;
			this.setState(prevState => ({
				users: prevState.users.concat(user)
			}))
		})
		.catch(err => console.log(err))
	}
	render() {
		const users = this.state.users;
		return(
			<Fragment>
				<ButtonFetchUser click={this.handleDataFetch} />
				{users.length > 0 && <UsersList users={users} />}
			</Fragment>
		)
	}
}

export default App;
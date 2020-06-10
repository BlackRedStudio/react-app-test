import React, {Component, Fragment} from 'react';
import './App.css';
import ButtonFetchUser from './ButtonFetchUser';
import UsersList from './UsersList';

const API = 'https://randomuser.me/api/?results=5';

class App extends Component {
	state = {
		users: null
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
			this.setState({
				users: data.results
			})
		})
		.catch(err => console.log(err))
	}
	render() {
		const users = this.state.users;
		return(
			<Fragment>
				<ButtonFetchUser click={this.handleDataFetch} />
				{users && <UsersList users={users} />}
			</Fragment>
		)
	}
}

export default App;
import React, { Component, Fragment } from 'react';

// rosnąca pseudo baza danych

const data = [
	{id: 1, title: 'Wiadomość nr 1', body: 'Zawartość wiadomości numer 1...'},
	{id: 2, title: 'Wiadomość nr 2', body: 'Zawartość wiadomości numer 2...'},
]

setInterval(() => {
	const index = data.length + 1;
	data.push({
		id: index,
		title: `Wiadomość nr ${index}`,
		body: `Zawartość wiadomości numer ${index}...`,
	})
}, 5000);

class App extends Component {

	state = {
		comments: [...data]
	}

	getData = () => {
		if(this.state.comments.length !== data.length) {
			this.setState({
				comments: [...data]
			})
		} else {
			console.log('dane takie same');
		}
	}

	componentDidMount() {
		this.intervalId = setInterval(this.getData, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		const comments = this.state.comments.map(comment=>(
		<div key={comment.id}>
			<h4>{comment.title}</h4>
			<p>{comment.body}</p>
		</div>	
		));

		return (
			<Fragment>
				<div className="App">
					{comments.reverse()}
				</div>
			</Fragment>
		)
	}
}

export default App;
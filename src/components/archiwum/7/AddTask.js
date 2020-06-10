import React, {Component, Fragment} from 'react';
import './AddTask.css';

class AddTask extends Component {

	minDate = new Date().toISOString().slice(0,10);
	state = {
		text: '',
		important: false,
		date: this.minDate
	}
	handleChange = e => {

		let value = e.target.value;
		if(e.target.type === 'checkbox')
			value = e.target.checked;

		this.setState({
			[e.target.id]: value
		})
	}
	handleClick = e => {
		const {text, date, important} = this.state;

		if(text.length > 2) {
			const add = this.props.add(text, date, important);
			if(add) {
				this.setState({
					text: '',
					important: false,
					date: this.minDate
				})
			}
		} else {
			console.log('Za krótka nazwa');
		}
	}
	render() {
		// * 1 żeby szybko zamienić string numeryczny na liczbę
		let maxDate = this.minDate.slice(0,4) * 1 + 1;
		maxDate = maxDate+'-12-31';

		return(
			<div className="form">
				<h1>TODO APP</h1>
				<input id="text" type="text" placeholder="Dodaj zadanie" value={this.state.text} onChange={this.handleChange} />
				<input type="checkbox" id="important" checked={this.state.important} onChange={this.handleChange} />
				<label htmlFor="important">Priorytet</label>
				<br />
				<label htmlFor="date">Do kiedy zrobić</label>
				<input id="date" type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleChange} />
				<br />
				<button onClick={this.handleClick}>Dodaj</button>
			</div>
		)
	}
}

export default AddTask;
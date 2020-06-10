import React, {Component, Fragment} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {

	
	state = {
		tasks: [
			{
				id: 0,
				text: 'zagrać wreszcie w Wiedźmina 3',
				date: '2020-11-02',
				important: false,
				active: true,
				finishDate: null
			},
			{
				id: 1,
				text: 'Pojechać na wycieczkę',
				date: '2020-10-03',
				important: false,
				active: true,
				finishDate: null
			},
			{
				id: 2,
				text: 'Nauczyć się grać na gitarze',
				date: '2020-09-15',
				important: true,
				active: true,
				finishDate: null
			},
			{
				id: 3,
				text: 'Popływać w jeziorze',
				date: '2020-06-15',
				important: false,
				active: true,
				finishDate: null
			},
			{
				id: 4,
				text: 'Pójść na studia',
				date: '2020-10-01',
				important: true,
				active: true,
				finishDate: null
			},
			{
				id: 5,
				text: 'Skoczyć na siłownie',
				date: '2020-07-22',
				important: false,
				active: true,
				finishDate: null
			},
		]
	}
	counter = this.state.tasks.length;
	deleteTask = (id) => {

		// Metoda z findIndex
		// const tasks = [...this.state.tasks];
		// const index = tasks.findIndex(task => task.id === id);
		// tasks.splice(index, 1);

		// Metoda z filter
		let tasks = [...this.state.tasks];
		tasks = tasks.filter(task => task.id !== id)

		this.setState({
			tasks
		})
	}
	changeTaskStatus = (id) => {
		const tasks = Array.from(this.state.tasks);
		tasks.forEach(task => {
			if(task.id === id) {
				task.active = false;
				task.finishDate = new Date().getTime();
			}
		})
		this.setState({ tasks })
	}
	addTask = (text, date, important) => {
		
		const task = {
			id: this.counter,
			text: text,
			date: date,
			important: important,
			active: true,
			finishDate: null
		};
		const tasks = [...this.state.tasks, task];
		this.setState({ tasks });
		this.counter++;

		return true;
	}
	render() {
		return(
			<div>
				<AddTask add={this.addTask} />
				<TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
			</div>
		)
	}
}

export default App;
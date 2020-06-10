import React from 'react';
import Task from './Task';

const TaskList = props => {
	
	const active = props.tasks.filter(task => task.active);
	const done = props.tasks.filter(task => !task.active);

	// done.sort( (a, b) => {
	// 	if(a.finishDate > b.finishDate) {
	// 		return -1;
	// 	}
	// 	if(a.finishDate < b.finishDate) {
	// 		return 1;
	// 	}
	// 	return 0;
	// });
	
	// Tylko do numerów krótki zapis
	if(done.length >= 2)
		done.sort( (a, b) => b.finishDate - a.finishDate);

	// Długi zapis głównie do stringów
	if(active.length >= 2) {
		active.sort( (a, b) => {

			// toLowerCase użyte aby zniwelować różnice w wielkich i małych literach np. Z większe od a
			a = a.text.toLowerCase();
			b = b.text.toLowerCase();

			if(a < b) 
				return -1;
			if(a > b)
				return 1;
			return 0;
		} );
	}


	const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
	const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
	return (
	<React.Fragment>
		<div className="active">
			<h1>Zadania do zrobienia ({activeTasks.length})</h1>
			{activeTasks.length > 0 ? activeTasks : <p>Brak zadań!</p>}
		</div>
		<hr/>
		<div className="done">
			<h3>Zadania zrobione ({doneTasks.length})</h3>
			{doneTasks.length > 5 && <span style={{fontSize: 14}}>Wyświetlonych jest jedynie 5 ostatnich elementów</span>}
			{doneTasks.slice(0, 5)}
		</div>
	</React.Fragment>
	)
}

export default TaskList;
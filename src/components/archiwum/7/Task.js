import React from 'react';

const Task = props => {

	const style = {
		color: 'red'
	}
	const {text, date, important, active, finishDate, id} = props.task;
	if(active) {
		return (
			<div>
				<p>
					<strong style={important ? style : null}>{text}</strong> - do <span>{date}</span>
					<button onClick={props.change.bind(this, id)} className="btnDone">Zostało zrobione</button>
					<button onClick={props.delete.bind(this, id)}>X</button>
				</p>
			</div>
		)
	} else {
		const finish = new Date(finishDate).toLocaleString();
		return (
			<div>
				<p>
					<strong>{text}</strong> <em>(zrobić do {date})</em><br />
					- potwierdzenie wykonania <span>{finish}</span>
					<button onClick={props.delete.bind(this, id)}>X</button>
				</p>
			</div>
		)
	}
}

export default Task;
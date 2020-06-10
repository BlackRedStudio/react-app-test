import React, {Component} from 'react';


class App extends Component {
	state = {
		active: true
	}

	render() {

		// const btn_off = {
		// 	border: '2px solid #000',
		// 	padding: '10px 20px',
		// 	fontFamily: 'arial',
		// 	fontSize: 30,
		// 	display: 'block',
		// 	margin: '20px auto',
		// 	backgroundColor: '#fff'
		// }
		// const btn_on = {
		// 	border: '2px solid #000',
		// 	padding: '10px 20px',
		// 	fontFamily: 'arial',
		// 	fontSize: 30,
		// 	display: 'block',
		// 	margin: '20px auto',
		// 	backgroundColor: 'cadetblue',
		// 	color: '#fff'
		// }

		// const styles = {
		// 	btn_off: {
		// 		border: '2px solid #000',
		// 		padding: '10px 20px',
		// 		fontFamily: 'arial',
		// 		fontSize: 30,
		// 		display: 'block',
		// 		margin: '20px auto',
		// 		backgroundColor: '#fff'
		// 	},
		// 	btn_on: {
		// 		border: '2px solid #000',
		// 		padding: '10px 20px',
		// 		fontFamily: 'arial',
		// 		fontSize: 30,
		// 		display: 'block',
		// 		margin: '20px auto',
		// 		backgroundColor: 'cadetblue',
		// 		color: '#fff'
		// 	}
		// }
		
		let btn = {
			border: '2px solid #000',
			padding: '10px 20px',
			fontFamily: 'arial',
			fontSize: 30,
			display: 'block',
			margin: '20px auto',
			backgroundColor: '#fff'
		}

		if(this.state.active) {
			btn.color = '#fff';
			btn.backgroundColor = 'cadetBlue';
		}

		return(
			<div>
				<button style={btn}
				 onClick={() => this.setState({active: !this.state.active})}>
				 {this.state.active ? 'Wyłącz' : 'Włącz'}</button>
			</div>
		)
	}
}

export default App;
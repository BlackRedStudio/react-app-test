import React from 'react';

const ButtonFetchUser = props => {
	return(
		<button style={{
			padding: '10px 20px',
			border: '2px solid #000',
			backgroundColor: '#fff',
			cursor: 'pointer',
			margin: 20
		}} onClick={props.click}>Dodaj użytkownika</button>
	)
}

export default ButtonFetchUser;
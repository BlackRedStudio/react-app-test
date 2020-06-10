import React from 'react';


const AdminPage = () => {
	return(
		<div style={{
			display: 'flex',
			flexDirection: 'column'
		}}>
			<label htmlFor="">Podaj login
				<input type="text"/>
			</label>
			<label htmlFor="">Podaj hasło
				<input type="password"/>
			</label>
			<button style={{maxWidth: 200}}>Zaloguj</button>
		</div>
	)
}

export default AdminPage;
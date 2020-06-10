import React, { Component } from 'react';
import './App.css';
// Link do prostych linków URL, NavLink zawiera dodatkowe rzeczy, używany do Menu
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';


const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt</h1>;
const ErrorPage = () => <h1>Strona nie istnieje</h1>;

class App extends Component {
	state = {

	}
	render() {
		return(
		<Router>
			<div>
				<header>
					<nav>
						<ul>
							<li>
							{/* exact - dokładna ścieżka dla active */}
								<NavLink exact to="/" activeClassName="home_selected" activeStyle={{ backgroundColor: 'gray' }}>
								Start</NavLink>
							</li>
							<li>
								<NavLink to="/aktualnosci" activeClassName="news_selected">Aktualności</NavLink>
							</li>
							<li>
								<NavLink to="/kontakt" activeClassName="contact_selected">Kontakt</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<section>
				{/* Switch powoduje że wykona się maksymalnie jeden komponent Route, exact dokładna ścieżka */}
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/aktualnosci" component={News} />
						<Route path="/kontakt" component={Contact} />
						<Route component={ErrorPage} />
					</Switch>
				</section>
			</div>
		</Router>
		)
	}
}

export default App;
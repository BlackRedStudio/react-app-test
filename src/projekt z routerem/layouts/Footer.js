import React from 'react';
import {Route} from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<div>
			<h2>Stopka</h2>

			<Route exact path="/" render={props => {
				return (
					<React.Fragment>
						<p>Jesteś na <span>Stronie Głównej</span></p>
					</React.Fragment>
				)
			}} />
			<Route exact path="/:page" render={props => {
				return (
					<React.Fragment>
						<p>Jesteś na <span>{props.match.params.page}</span></p>
					</React.Fragment>
				)
			}} />

			<Route exact path="/:page/:idProduct" render={props => {
				return (
					<React.Fragment>
						<p>Jesteś na <span>{props.match.params.idProduct}</span></p>
					</React.Fragment>
				)
			}} />
		</div>
	)
}

export default Footer;
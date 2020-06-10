import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProductsListPage from '../pages/ProductsListPage';
import ProductPage from '../pages/ProductPage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" exact component={HomePage} />
				<Route path="/contact" component={ContactPage} />
				<Route exact path="/products" component={ProductsListPage} />
				<Route path="/products/:id" component={ProductPage} />
				<Route path="/admin" component={AdminPage} />
				<Route path="/login" component={LoginPage} />
				<Route component={ErrorPage} />
			</Switch>
		</React.Fragment>
	)
}

export default Page;
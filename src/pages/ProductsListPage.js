import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ProductsListPage.css';

const products = ['car', 'bike', 'motorcycle'];
const ProductsListPage = () => {

	const productsList = products.map(product => (
		<li key={product}>
			<Link to={`/products/${product}`} >{product}</Link>
		</li>
	));
	return (
		<div className="products">
			<h2>Lista produktów</h2>
			<div>
				<ul>
					{productsList}
				</ul>
			</div>
		</div>
	)
}

export default ProductsListPage;
import React from 'react';
import Article from '../components/Article';

const articles = [
	{
		id: 1,
		title: 'Czym jest teoria strun?',
		author: 'Jan Nowak',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum assumenda asperiores veniam tempore fugit. Mollitia, omnis praesentium, soluta exercitationem temporibus atque dignissimos sint! Provident natus expedita earum ad libero!',
	},
	{
		id: 2,
		title: 'Czym jest paradoks Fermiego?',
		author: 'Jan Nowak',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum assumenda asperiores veniam tempore fugit. Mollitia, omnis praesentium, soluta exercitationem temporibus atque dignissimos sint! Provident natus expedita earum ad libero!',
	},
	{
		id: 3,
		title: 'Ciemna materia & Ciemna energa',
		author: 'Jan Nowak',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nostrum assumenda asperiores veniam tempore fugit. Mollitia, omnis praesentium, soluta exercitationem temporibus atque dignissimos sint! Provident natus expedita earum ad libero!',
	}
]

const HomePage = () => {
	const artList = articles.map(article => <Article key={article.id} {...article} />);
	return(
		<div>
			HomePage
			{artList}
		</div>
	)
}

export default HomePage;
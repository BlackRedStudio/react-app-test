import React, {Component, Fragment} from 'react';
import Word from './Word';

class App extends Component {

	state = {
		words: [],
		isLoaded: false
	}
		
	fetchData = () => {
		fetch('data/words.json')
		.then(res => res.json())
		.then((data) => {
			this.setState({
				words: data.words,
				isLoaded: !this.state.isLoaded
			})
		});
	}

	componentDidMount() {
		// celowe opóźnienie
		setTimeout(this.fetchData, 3000);
	}

	render() {
		const words = this.state.words.map(word=>(
			<Word 
			key={word.id}
			pl={word.pl}
			en={word.en} />
		))
		return (
			<Fragment>
				<ul>
					{this.state.isLoaded ? words : 'Wczytuję dane'}
				</ul>
			</Fragment>
		)
	}
}

export default App;
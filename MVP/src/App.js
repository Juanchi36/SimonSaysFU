import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			urlChat:
				'https://images.ctfassets.net/1es3ne0caaid/1wt3K74Cm84Mm62SIgkkqY/4cffd3437a3962b8efd64ac456fff2ad/react-weather-bot-demo-3.gif',
			urlSimon:
				'https://raw.githubusercontent.com/weslleyaraujo/react-simon-says/master/screenshot.png'
		};
	}
	render () {
		const { urlChat, urlSimon } = this.state;
		return (
			<div className='App'>
				<div className='container'>
					<div className='simon'>
						<h2>Simon Says</h2>
						<img alt='imagen' src={urlSimon} />
					</div>
					<div className='chatbot'>
						<img alt='imagen' src={urlChat} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

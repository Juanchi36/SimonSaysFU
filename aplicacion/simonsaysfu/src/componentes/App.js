import React, { Component } from 'react';
import UserNav from './UserNav';
import SimonGame from './SimonGame';
import ChatBot from '../componentes/ChatBot';
import '../App.css';

class App extends Component {
	render () {
		return (
			<div>
				<UserNav />
				<div className='dual'>
					<div>
						<SimonGame />
					</div>
					<div className='chatbot'>
						<ChatBot />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import UserNav from './UserNav';
import SimonGame from './SimonGame';

class App extends Component {
	render () {
		return (
			<div>
				<UserNav />
				<SimonGame />
			</div>
		);
	}
}

export default App;

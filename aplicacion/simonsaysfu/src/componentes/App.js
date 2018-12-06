import React, { Component } from 'react';
import UserNav from './UserNav';
import SimonGame from './SimonGame';
import ChatBot from '../componentes/ChatBot';
import { store } from '../store';
import '../App.css';

class App extends Component {
	constructor () {
		super();
		// re-renderiza el componente
		store.subscribe(() => this.forceUpdate());
	}

	componenteConMargin = () => {
		return <div style={this.props.style} />;
	};

	render () {
		const { simonView, styleAlone } = store.state;

		return (
			<div>
				<UserNav />
				<div className='dual'>
					{simonView && (
						<div className='dual1'>
							<SimonGame />
						</div>
					)}

					<div className='dual2'>
						<ChatBot />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

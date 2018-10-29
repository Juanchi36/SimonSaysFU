import React, { Component } from 'react';
import firebase from 'firebase';
import UserNav from './UserNav';
import { store } from '../store';

class App extends Component {
	componentWillMount () {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				store.update({ user: user });
			} else {
				store.update({ user: null });
			}
		});
	}

	render () {
		return (
			<div>
				<UserNav />
			</div>
		);
	}
}

export default App;

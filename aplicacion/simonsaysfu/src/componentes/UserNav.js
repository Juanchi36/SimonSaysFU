import React, { PureComponent } from 'react';
import '../styles/Usernav.css';
import { store } from '../store';
import { boton, handleAuth, handleLogout } from '../actions';
import firebase from 'firebase';

class UserNav extends PureComponent {
	constructor () {
		super();
		// re-renderiza el componente
		store.subscribe(() => this.forceUpdate());
	}
	componentWillMount () {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				store.update({ user: user });
			} else {
				store.update({ user: null });
			}
		});
	}
	renderUserData () {
		// trae al objeto user del store
		const { user } = store.state;
		return (
			<ul className='navbar right'>
				<li>
					<img
						width='32'
						className='avatar circle responsive-img'
						src={user.photoURL}
						alt='user img'
					/>
				</li>
				<li className='user-name'>{user.displayName}</li>
				<li>
					<button
						className='waves-effect waves-light btn blue darken-1'
						onClick={() => handleLogout()}
					>
						Logout
					</button>
				</li>
			</ul>
		);
	}

	renderLoginButton () {
		return (
			<ul className='right'>
				<li>
					<button
						className='waves-effect waves-light btn blue darken-1'
						// dispara la action hadleAuth
						onClick={() => handleAuth()}
					>
						Login
					</button>
				</li>
			</ul>
		);
	}

	render () {
		const { appName, user } = store.state;

		return (
			<nav className='blue darken-4'>
				<div className='nav-wrapper container'>
					<a href='#' className='long-title left brand-logo'>
						{appName}
					</a>
					<a href='#' className='short-title left brand-logo'>
						SS FU
					</a>

					{user ? this.renderUserData() : this.renderLoginButton()}
				</div>
				<div>
					<button onClick={() => boton()} />
				</div>
			</nav>
		);
	}
}

export default UserNav;

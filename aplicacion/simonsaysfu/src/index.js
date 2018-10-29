import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

firebase.initializeApp({
	apiKey: 'AIzaSyBfB9Uu3U4izef2W16dKeOmxVZH_ZzBgjM',
	authDomain: 'simonsaysfu-f6f76.firebaseapp.com',
	databaseURL: 'https://simonsaysfu-f6f76.firebaseio.com',
	projectId: 'simonsaysfu-f6f76',
	storageBucket: '',
	messagingSenderId: '202498492664'
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

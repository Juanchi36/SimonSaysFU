import React, { Component } from 'react';
import Pusher from 'pusher-js';
import { store } from '../store';

class Chatbot extends Component {
	constructor (props) {
		super(props);
		this.state = {
			userMessage: '',
			conversation: []
		};
		this.scrollView = null;
		//store.subscribe(() => this.forceUpdate());
	}

	componentDidMount () {
		const pusher = new Pusher('cad03590e98e19a4d701', {
			cluster: 'us2',
			encrypted: true
		});

		const channel = pusher.subscribe('bot');
		channel.bind('bot-response', (data) => {
			const msg = {
				text: data.message,
				user: 'ai'
			};
			this.setState(
				{
					conversation: [ ...this.state.conversation, msg ]
				},
				this.scrollToLastThread
			);
		});
	}

	scrollToLastThread = () => {
		this.scrollView.scrollTo(0, 99999999999);
	};

	handleChange = (event) => {
		this.setState({ userMessage: event.target.value });
	};

	handleSubmit = (event) => {
		console.log(event);
		event.preventDefault();

		if (!this.state.userMessage.trim()) return;

		const msg = {
			text: this.state.userMessage,
			user: 'human'
		};
		const { simonView } = store.state;
		if (msg.text === 'quiero jugar por favor') {
			store.update({ simonView: true });
			console.log(simonView);
		}

		this.setState(
			{
				conversation: [ ...this.state.conversation, msg ]
			},
			this.scrollToLastThread
		);

		fetch('http://localhost:5000/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message: this.state.userMessage
			})
		});

		this.setState({ userMessage: '' });
	};

	render () {
		const { user, mensajePerder } = store.state;
		console.log(mensajePerder);
		const ChatBubble = (text, i, className) => {
			if (user && className === 'human') {
				return (
					<div key={`${className}-${i}`} className={`${className} chat-bubble`}>
						<img
							width='32'
							className='avatar circle responsive-img'
							src={user.photoURL}
							alt='user img'
						/>
						<span className='chat-content'>{text}</span>
					</div>
				);
			} else {
				return (
					<div key={`${className}-${i}`} className={`${className} chat-bubble`}>
						<span className='chat-content'>{text}</span>
					</div>
				);
			}
		};

		const chat = this.state.conversation.map((e, index) =>
			ChatBubble(e.text, index, e.user)
		);

		return (
			<div>
				{/* <h1>React Chatbot</h1> */}

				<div className='chat-window'>
					<div
						ref={(view) => (this.scrollView = view)}
						className='conversation-view'
					>
						{chat}
					</div>
					<div className='message-box'>
						<form onSubmit={this.handleSubmit}>
							<input
								value={this.state.userMessage}
								onInput={this.handleChange}
								className='text-input'
								type='text'
								autoFocus
								placeholder='Ingrese el mensaje y presione enter'
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Chatbot;
